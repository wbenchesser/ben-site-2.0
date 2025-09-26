import React from 'react';
import { poems } from '../data/poems';
import '../App.css';

export default function PoetryList() {
  return (
    <main className="page">
      <div className="container">
        <h1 className="page-title">Poetry</h1>
        <p className="muted">A selection of poems. Click to read.</p>

        <div className="poem-grid" role="list">
          {poems.map((p) => (
            <a key={p.id} role="listitem" className="poem-card" href={`#/poetry/${p.id}`}>
              <div className="poem-card-inner">
                <h3 className="poem-title">{p.title}</h3>
                <div className="poem-meta">{p.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
