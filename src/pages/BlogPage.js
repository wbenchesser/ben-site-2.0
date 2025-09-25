import React from 'react';
import { blogs } from '../data/blogs';
import '../App.css';

function useBlogFromHash() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    const sync = () => {
      const id = (window.location.hash.split('/')[2] || '').trim();
      const found = blogs.find((b) => b.id === id);
      setPost(found || null);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  return post;
}

export default function BlogPage() {
  const post = useBlogFromHash();
  if (!post) {
    return (
      <main className="page">
        <div className="container">
          <p>Post not found. <a href="#/blog">Back to Blog</a></p>
        </div>
      </main>
    );
  }
  return (
    <main className="page">
      <div className="container article-container">
        <p className="crumbs"><a href="#/blog">Blog</a> / <span>{post.title}</span></p>
        <h1 className="page-title">{post.title}</h1>
        <p className="article-byline">{post.date}</p>
        <article className="article" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </main>
  );
}

