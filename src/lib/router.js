import { useEffect, useState, useCallback } from 'react';

// 아주 단순한 History API 라우터: "/" (목록), "/posts/:id" (상세)
export function useLocation() {
  const [loc, setLoc] = useState(() => window.location.pathname + window.location.search);
  useEffect(() => {
    const on = () => setLoc(window.location.pathname + window.location.search);
    window.addEventListener('popstate', on);
    return () => window.removeEventListener('popstate', on);
  }, []);
  const navigate = useCallback((to, { replace = false } = {}) => {
    if (replace) window.history.replaceState({}, '', to);
    else window.history.pushState({}, '', to);
    setLoc(to);
    window.scrollTo(0, 0);
  }, []);
  return [loc, navigate];
}

export function parseLocation(loc) {
  const url = new URL(loc, 'http://x');
  const m = url.pathname.match(/^\/posts\/([^/]+)\/?$/);
  return {
    postId: m ? decodeURIComponent(m[1]) : null,
    isHome: url.pathname === '/',
    q: url.searchParams.get('q') ?? '',
    category: url.searchParams.get('category') ?? '',
  };
}

export function buildHome({ q = '', category = '' } = {}) {
  const p = new URLSearchParams();
  if (q) p.set('q', q);
  if (category) p.set('category', category);
  const s = p.toString();
  return s ? `/?${s}` : '/';
}
