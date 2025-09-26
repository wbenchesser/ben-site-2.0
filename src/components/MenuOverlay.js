import React from 'react';
import '../App.css';

export default function MenuOverlay({ open, onClose, currentRoute = '/' }) {
  const section = React.useMemo(() => {
    if (!currentRoute || currentRoute === '/' || currentRoute === '#/') return 'home';
    const [, first = 'home'] = currentRoute.split('/');
    return first || 'home';
  }, [currentRoute]);

  const linkState = (key) => ({
    className: key === section ? 'active' : undefined,
    'aria-current': key === section ? 'page' : undefined,
  });

  const handle = () => {
    onClose?.();
  };
  return (
    <div className={`overlay ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Site menu">
      <button className="overlay-close" onClick={onClose} aria-label="Close menu">×</button>
      <div className="overlay-inner">
        <nav className="overlay-nav">
          <a href="#/" onClick={handle} {...linkState('home')}>HOME</a>
          <a href="#/blog" onClick={handle} {...linkState('blog')}>BLOG</a>
          <a href="#/poetry" onClick={handle} {...linkState('poetry')}>POETRY</a>
          <a href="#/projects" onClick={handle} {...linkState('projects')}>PROJECTS</a>
          <a href="#/photography" onClick={handle} {...linkState('photography')}>PHOTOGRAPHY</a>
        </nav>
      </div>
    </div>
  );
}
