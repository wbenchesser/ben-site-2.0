import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const currentRoute = () => window.location.hash.replace(/^#/, '') || '/';
let nextKey = 0;
const newKey = () => `page-${Date.now()}-${++nextKey}`;

export default function useHashRoute() {
  const [route, setRoute] = useState(currentRoute);
  const pending = useRef(null);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    let key = newKey();
    let activeRoute = currentRoute();
    const positions = new Map();
    const stamp = () => window.history.replaceState({ ...window.history.state, pageKey: key }, '');
    stamp();
    const save = () => positions.set(key, window.scrollY);
    const navigate = (restore = false) => {
      save();
      key = restore && window.history.state?.pageKey ? window.history.state.pageKey : newKey();
      stamp();
      activeRoute = currentRoute();
      pending.current = restore ? positions.get(key) || 0 : 0;
      setRoute(activeRoute);
    };
    const click = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash.startsWith('#/')) return;
      if (url.hash === window.location.hash) return;
      event.preventDefault();
      save();
      window.history.pushState({}, '', url.hash);
      navigate();
    };
    const pop = () => navigate(true);
    // Also support direct hash assignments made outside the link handler.
    const hash = () => { if (currentRoute() !== activeRoute) navigate(); };
    document.addEventListener('click', click);
    window.addEventListener('popstate', pop);
    window.addEventListener('hashchange', hash);
    window.addEventListener('scroll', save, { passive: true });
    return () => {
      window.history.scrollRestoration = previousRestoration;
      document.removeEventListener('click', click);
      window.removeEventListener('popstate', pop);
      window.removeEventListener('hashchange', hash);
      window.removeEventListener('scroll', save);
    };
  }, []);

  useLayoutEffect(() => {
    if (pending.current === null) return undefined;
    const y = pending.current;
    pending.current = null;
    // Detail pages resolve their content in effects; focus after that render.
    const frame = requestAnimationFrame(() => {
      const heading = document.querySelector('main h1') || document.querySelector('main');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
      window.scrollTo({ top: y, left: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [route]);
  return route;
}
