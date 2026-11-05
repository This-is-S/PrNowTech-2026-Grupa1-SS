import { notFound } from 'next/navigation';

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Błąd serwera'); // to obsłuży error.js
  return res.json();
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound(); // przerywa renderowanie i pokazuje not-found.js
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
}