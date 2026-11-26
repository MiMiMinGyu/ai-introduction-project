// 검색·필터·정렬·페이지네이션 순수 함수 (PRD 3장 검색 규칙)
export const CATEGORIES = ['학사', '장학', '식당', '공모전·해커톤', '동아리', '꿀팁'];
export const PAGE_SIZE = 10;
export const MAX_QUERY = 30;

export const ERRORS = {
  EMPTY: '검색어를 입력해 주세요.',
  TOO_LONG: '검색어는 30자까지 입력할 수 있어요.',
};

// E1, E2 검증. 공백 제거 후 1~30자.
export function validateQuery(raw) {
  const q = (raw ?? '').trim();
  if (q.length === 0) return { ok: false, error: ERRORS.EMPTY, q };
  if (q.length > MAX_QUERY) return { ok: false, error: ERRORS.TOO_LONG, q };
  return { ok: true, q };
}

const normTag = (t) => t.replace(/^#/, '').toLowerCase();

// 제목/본문 부분 일치(대소문자 무시) 또는 태그 완전 일치
export function matchesQuery(post, q) {
  if (!q) return true;
  const lower = q.toLowerCase();
  if (post.title.toLowerCase().includes(lower)) return true;
  if (post.content.toLowerCase().includes(lower)) return true;
  return post.tags.some((t) => normTag(t) === normTag(q));
}

// 최신순(작성일 내림차순, 동일하면 id 내림차순)
export function sortNewest(posts) {
  return [...posts].sort((a, b) =>
    a.createdAt === b.createdAt ? b.id - a.id : b.createdAt.localeCompare(a.createdAt)
  );
}

export function queryPosts(all, { q = '', category = '', page = 1, size = PAGE_SIZE } = {}) {
  const filtered = sortNewest(
    all.filter((p) => (!category || p.category === category) && matchesQuery(p, q))
  );
  const end = page * size;
  return { items: filtered.slice(0, end), total: filtered.length, hasMore: filtered.length > end };
}

// 검색어 하이라이트용 분할
export function splitHighlight(text, q) {
  if (!q) return [{ text, hit: false }];
  const lower = text.toLowerCase();
  const ql = q.toLowerCase();
  const out = [];
  let i = 0;
  while (i < text.length) {
    const j = lower.indexOf(ql, i);
    if (j === -1) { out.push({ text: text.slice(i), hit: false }); break; }
    if (j > i) out.push({ text: text.slice(i, j), hit: false });
    out.push({ text: text.slice(j, j + q.length), hit: true });
    i = j + q.length;
  }
  return out;
}
