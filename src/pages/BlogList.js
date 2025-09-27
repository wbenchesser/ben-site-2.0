import React from 'react';
import { blogs } from '../data/blogs';
import '../App.css';

export default function BlogList() {
  return (
    <main className="page page-blog">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <div className="blog-grid" role="list">
          {blogs.map((b) => (
            <a key={b.id} role="listitem" className="blog-card" href={`#/blog/${b.id}`}>
              <div className="blog-card-inner">
                <h3 className="blog-title">{b.title}</h3>
                <div className="blog-meta">{b.date}</div>
                <p className="blog-blurb">{b.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
