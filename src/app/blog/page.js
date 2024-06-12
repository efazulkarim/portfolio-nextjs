import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getSersideProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="mb-4">
            <Link href={`/posts/${post.slug}`}>
              <a className="text-2xl font-semibold text-blue-600">{post.title}</a>
            </Link>
            <p className="text-gray-600">{post.date}</p>
            <p className="text-gray-800">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
