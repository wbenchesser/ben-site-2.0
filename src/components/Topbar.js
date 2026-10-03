import React from 'react';
import { GridIcon, Icon } from './Icons';
import '../App.css';

export default function Topbar({ onOpenMenu, menuOpen = false, currentRoute = '/' }) {
  const [scrolled, setScrolled] = React.useState(() => window.scrollY > 32);
  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  const section = currentRoute.split('/')[1] || '';
  const links = [['', 'Home'], ['blog', 'Blog'], ['poetry', 'Poetry'], ['projects', 'Projects'], ['gallery', 'Gallery']];
  return (
    <header className={`topbar${scrolled ? ' topbar-scrolled' : ''}`}>
      <div className="topbar-inner">
        <nav className="topbar-nav" aria-label="Main navigation">
          {links.map(([path, label]) => (
            <a key={path} href={`#/${path}`} aria-current={section === path ? 'page' : undefined}>{label}</a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-btn"
          onClick={onOpenMenu}
          aria-label="Open navigation"
          aria-haspopup="true"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <GridIcon />
          <span className="menu-btn-label">Menu</span>
        </button>
        <div className="social">
          <a className="icon-btn" href="https://www.linkedin.com/in/wbenchesser" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
          <a className="icon-btn" href="https://github.com/wbenchesser" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
        </div>
      </div>
    </header>
  );
}
