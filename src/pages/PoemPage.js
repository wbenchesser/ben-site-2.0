import React from 'react';
import { poems } from '../data/poems';
import '../App.css';

function usePoemFromHash() {
  const [poem, setPoem] = React.useState(null);
  React.useEffect(() => {
    const update = () => {
      const id = (window.location.hash.split('/')[2] || '').trim();
      const found = poems.find((p) => p.id === id);
      setPoem(found || null);
    };
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return poem;
}

export default function PoemPage() {
  const poem = usePoemFromHash();

  if (!poem) {
    return (
      <main className="page">
        <div className="container">
          <p>Poem not found. <a href="#/poetry">Back to Poetry</a></p>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container poem-container">
        <p className="crumbs"><a href="#/poetry">Poetry</a> / <span>{poem.title}</span></p>
        <h1 className="page-title">{poem.title}</h1>
        <p className="poem-byline">{poem.author} • {poem.date}</p>
        <article className="poem" dangerouslySetInnerHTML={{ __html: poem.content }} />
      </div>
    </main>
  );
}

