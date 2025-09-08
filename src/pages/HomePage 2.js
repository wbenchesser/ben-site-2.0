import React from 'react';
import '../App.css';

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, fill: 'currentColor' };
  switch (name) {
    case 'mail':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.01L12 13l8-4.99V8L12 16 4 8z"/>
        </svg>
      );
    case 'github':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12.2c0 5.15 3.34 9.51 7.98 11.05.58.11.8-.25.8-.56 0-.28-.01-1.02-.02-2-3.24.72-3.93-1.58-3.93-1.58-.53-1.36-1.3-1.72-1.3-1.72-1.06-.74.08-.73.08-.73 1.17.08 1.79 1.21 1.79 1.21 1.04 1.8 2.73 1.28 3.4.98.11-.77.41-1.28.74-1.58-2.59-.3-5.32-1.32-5.32-5.87 0-1.3.46-2.36 1.21-3.19-.12-.3-.52-1.53.12-3.18 0 0 .98-.32 3.2 1.21a11.1 11.1 0 0 1 5.82 0c2.21-1.53 3.2-1.21 3.2-1.21.64 1.65.24 2.88.12 3.18.76.83 1.21 1.89 1.21 3.19 0 4.56-2.74 5.57-5.35 5.87.42.36.79 1.06.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12.2 11.5 11.5 0 0 0 12 .5z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.65H9.33V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.33 2.4 4.33 5.51v6.24zM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45z" />
        </svg>
      );
    default:
      return null;
  }
}

function GridIcon() {
  return (
    <span className="menu-icon" aria-hidden>
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} />
      ))}
    </span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <GridIcon />
            MENU
          </button>
          <div className="social">
            <a className="icon-link" href="mailto:wbenchesser@gmail.com" aria-label="Email"><Icon name="mail"/></a>
            <a className="icon-link" href="https://github.com/wbenchesser" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
            <a className="icon-link" href="https://www.linkedin.com/in/wbenchesser" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
          </div>
        </div>
      </header>

      <main className="home">
        <div className="container hero">
          <div className="hero-header">
            <h1 className="hero-title">BEN CHESSER</h1>
            <div className="signature" aria-hidden>
              <svg width="320" viewBox="0 0 320 80">
                <text x="0" y="58" fontSize="56">wbenchesser</text>
              </svg>
            </div>
          </div>
          <div
            className="hero-media placeholder"
            style={{ backgroundImage: "url(/images/home/home-hero.jpg)", backgroundBlendMode: 'overlay' }}
            role="img"
            aria-label="Hero image"
          />
        </div>

        <div className="container">
          <section className="section">
            <h2>Welcome!</h2>
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
            <p><a href="#blog">Read blog posts →</a></p>
            <p>
              Some of you may know I'm a creative writing minor. I don't know how, it's not like I mention it.
              If it's a poem, it may be a bit sappy or cringe, so be prepared for that. Here's some of my work.
            </p>
            <p><a href="#poems">Read poems →</a></p>
            <p className="muted">Feel free to reach out at <a href="mailto:wbchesser@gmail.com">wbchesser@gmail.com</a></p>
          </section>
        </div>
      </main>

      {/* Menu overlay */}
      <div className={`overlay ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Site menu">
        <button className="overlay-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
        <div className="overlay-inner">
          <nav className="overlay-nav">
            <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>BLOG</a>
            <a href="#poetry" onClick={() => setMenuOpen(false)}>POETRY</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a>
            <a href="#photography" onClick={() => setMenuOpen(false)}>PHOTOGRAPHY</a>
          </nav>
        </div>
      </div>
    </>
  );
}
