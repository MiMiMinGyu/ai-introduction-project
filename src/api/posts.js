// 데이터 접근 계층. 지금은 정적 JSON, 추후 GET API로 교체할 때 이 파일만 수정합니다.
//   GET /posts?q=&category=&page=   GET /posts/{id}
import { queryPosts } from '../lib/search.js';

let cache = null;
async function loadAll() {
  if (cache) return cache;
  const res = await fetch('/data/posts.json');
  if (!res.ok) throw new Error(`load failed: ${res.status}`);
  cache = await res.json();
  return cache;
}

export async function fetchPosts({ q = '', category = '', page = 1 } = {}) {
  return queryPosts(await loadAll(), { q, category, page });
}

export async function fetchPost(id) {
  const all = await loadAll();
  return all.find((p) => String(p.id) === String(id)) ?? null;
}
