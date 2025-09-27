import React from 'react';
import HomePage from './pages/HomePage';
import PoetryList from './pages/PoetryList';
import PoemPage from './pages/PoemPage';
import BlogList from './pages/BlogList';
import BlogPage from './pages/BlogPage';
import Topbar from './components/Topbar';
import MenuOverlay from './components/MenuOverlay';
import ProjectList from './pages/ProjectList';
import ProjectPage from './pages/ProjectPage';
import GalleryPage from './pages/GalleryPage';

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash.replace(/^#/, '') || '/';
}

export default function App() {
  const route = useHashRoute();
  const [menuOpen, setMenuOpen] = React.useState(false);

  let view = <HomePage />;
  if (route.startsWith('/poetry/')) view = <PoemPage />;
  else if (route === '/poetry') view = <PoetryList />;
  else if (route.startsWith('/blog/')) view = <BlogPage />;
  else if (route === '/blog') view = <BlogList />;
  else if (route.startsWith('/projects/')) view = <ProjectPage />;
  else if (route === '/projects') view = <ProjectList />;
  else if (route === '/gallery') view = <GalleryPage />;

  return (
    <>
      <Topbar onOpenMenu={() => setMenuOpen(true)} menuOpen={menuOpen} />
      <div className="topbar-offset" aria-hidden="true" />
      {view}
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentRoute={route}
      />
    </>
  );
}
