import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import remark from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map(filename => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...data,
        contentHtml,
      },
    },
  };
}

export default function Post({ post }) {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div className="text-gray-600 mb-6">{post.date}</div>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}
