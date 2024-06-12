import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

async function getPost(slug) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...data,
    contentHtml,
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
}

export default async function Post({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div className="text-gray-600 mb-6">{post.date}</div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
