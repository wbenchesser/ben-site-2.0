import React from 'react';
import { GridIcon, Icon } from './Icons';
import '../App.css';

export default function Topbar({ onOpenMenu, menuOpen = false }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
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
          <a className="icon-btn" href="mailto:wbenchesser@gmail.com" aria-label="Email"><Icon name="mail"/></a>
          <a className="icon-btn" href="https://github.com/wbenchesser" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
          <a className="icon-btn" href="https://www.linkedin.com/in/wbenchesser" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
        </div>
      </div>
    </header>
  );
}
