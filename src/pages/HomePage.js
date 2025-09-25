import React from 'react';
import { blogs } from '../data/blogs';
import { poems } from '../data/poems';
import '../App.css';

export default function HomePage() {
  return (
    <>
      <main className="home">
        <div className="container hero">
          <div className="hero-header">
            <h1 className="hero-title">BEN CHESSER</h1>
            <div className="signature" aria-hidden>
              <span className="signature-text">wbenchesser</span>
            </div>
          </div>
          <div
            className="hero-media"
            style={{ backgroundImage: "url(/images/home/home-hero.jpg)" }}
            role="img"
          >
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Welcome</h2>
            <p>In case you don't know me, I'm Ben.</p>
            <p>
              I'm working on my BS in Computer Science with a minor in Creative Writing at UNC
              Chapel Hill and plan to graduate May, 2026.
            </p>
            <p>
              This past summer I was a software engineering intern at Apple in Austin, Texas.
            </p>
            <p>
              I'm currently a teaching assistant for UNC's Computer Organization course (COMP 311)
              and used to be a TA for our System's Fundamentals course (COMP 211).
            </p>
            <p>
              I am the Computer Science Experience Labs (CSXL) staff manager and have been
              working with them for three semesters.
            </p>
            <p>
              Finally, I am the senior advisor and previous CEO of App Team Carolina, a nonprofit
              student organization that primarily teaches mobile development and makes production-level
              apps including ones for other nonprofits like PORCH and startup apps like Centible.
            </p>
            <p>
              You can view my resume <a href="#resume">here</a>.
            </p>
          </section>

          <section className="section">
            <h2>Blog and Other Writing</h2>
            <p>
              Really, the point of this website is that I liked the idea of starting a blog.
              None of it is generative AI, I promise. As I write, I'll post and update here.
            </p>
            <h3 className="home-subtitle">Recent Blog Posts</h3>
            <div className="home-list-grid">
              {blogs.slice(0, 3).map((b) => (
                <a key={b.id} className="blog-card" href={`#/blog/${b.id}`}>
                  <div className="blog-card-inner">
                    <h3 className="blog-title">{b.title}</h3>
                    <div className="blog-meta">{b.date}</div>
                    <p className="blog-blurb">{b.blurb}</p>
                  </div>
                </a>
              ))}
            </div>
            <p><a href="#/blog">Read all blog posts →</a></p>
            <p>
              Some of you may know I'm a creative writing minor. I don't know how, it's not like I mention it.
              If it's a poem, it may be a bit sappy or cringe, so be prepared for that. Here's some of my work.
            </p>
            <h3 className="home-subtitle">Recent Poems</h3>
            <div className="home-list-grid">
              {poems.slice(0, 3).map((p) => (
                <a key={p.id} className="poem-card" href={`#/poetry/${p.id}`}>
                  <div className="poem-card-inner">
                    <h3 className="poem-title">{p.title}</h3>
                    <div className="poem-meta">{p.author} • {p.date}</div>
                  </div>
                </a>
              ))}
            </div>
            <p><a href="#/poetry">Read all poems →</a></p>
          </section>
        </div>
      </main>
    </>
  );
}
