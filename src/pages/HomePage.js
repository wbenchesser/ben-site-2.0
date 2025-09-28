import React from 'react';
import { blogs } from '../data/blogs';
import { poems } from '../data/poems';
import '../App.css';

export default function HomePage() {
  const heroImage = `${process.env.PUBLIC_URL || ''}/images/home/home-hero.jpg`;
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
            style={{ backgroundImage: `url(${heroImage})` }}
            role="img"
          >
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Welcome</h2>
            <p>In case you don't know me, I'm Ben!</p>
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
              I am the <a href="https://csxl.unc.edu/welcome" target="_blank" rel="noreferrer">Computer Science Experience Labs</a> (CSXL) staff manager and have been
              working with them for three semesters.
            </p>
            <p>
              I am the senior advisor and previous CEO of <a href="https://appteamcarolina.com" target="_blank" rel="noreferrer">App Team Carolina</a>, a nonprofit
              student organization that primarily teaches mobile development and makes production-level
              apps including ones for other nonprofits like PORCH and startup apps like Centible.
            </p>
            <p>
              I recently started learning guitar and love indie and rock music. Being placed in Austin was 
              a great fit as the live music scene there is incredible, and I loved seeing my favorite band,  
              Peach Pit, perform! I also spend a lot of time reading. Lately, I've been focused on the epic 
              fantasy series <i>The Stormlight Archive.</i> In addition, I'm currently training for a half marathon, and 
              always appreciate recommendations for good running routes.
            </p>
            <p>
              You can view my resume <a href="/ben-chesser-resume.pdf" target="_blank" rel="noreferrer">here</a>.
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
            <p className="read-more"><a href="#/blog">Read all blog posts →</a></p>
          </section>

          <section className='section'>
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
                    <div className="poem-meta">{p.date}</div>
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
