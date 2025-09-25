import React from 'react';
import '../App.css';

export default function MenuOverlay({ open, onClose }) {
  const handle = (e) => {
    onClose?.();
  };
  return (
    <div className={`overlay ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Site menu">
      <button className="overlay-close" onClick={onClose} aria-label="Close menu">×</button>
      <div className="overlay-inner">
        <nav className="overlay-nav">
          <a href="#/" onClick={handle}>HOME</a>
          <a href="#/blog" onClick={handle}>BLOG</a>
          <a href="#/poetry" onClick={handle}>POETRY</a>
          <a href="#/projects" onClick={handle}>PROJECTS</a>
          <a href="#/photography" onClick={handle}>PHOTOGRAPHY</a>
        </nav>
      </div>
    </div>
  );
}

