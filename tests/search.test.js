import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validateQuery, queryPosts, matchesQuery, splitHighlight, ERRORS } from '../src/lib/search.js';

const all = JSON.parse(fs.readFileSync(new URL('../public/data/posts.json', import.meta.url)));

test('E1 빈 검색어 / 공백만', () => {
  assert.equal(validateQuery('').error, ERRORS.EMPTY);
  assert.equal(validateQuery('   ').error, ERRORS.EMPTY);
});
test('E2 30자 초과, 30자는 허용', () => {
  assert.equal(validateQuery('가'.repeat(31)).error, ERRORS.TOO_LONG);
  assert.ok(validateQuery('가'.repeat(30)).ok);
  assert.equal(validateQuery('  수강  ').q, '수강');
});
test('제목·본문 부분 일치, 대소문자 무시', () => {
  assert.ok(queryPosts(all, { q: '장바구니' }).total >= 1);
  assert.equal(matchesQuery({ title: 'ABC', content: 'x', tags: [] }, 'abc'), true);
});
test('태그는 완전 일치(# 유무 무관)', () => {
  const p = { title: 'a', content: 'b', tags: ['수강신청'] };
  assert.equal(matchesQuery(p, '수강신청'), true);
  assert.equal(matchesQuery(p, '#수강신청'), true);
  assert.equal(matchesQuery({ ...p, content: 'b' }, '수강신'), false);
});
test('카테고리 필터 + 검색 결합', () => {
  const r = queryPosts(all, { q: '수강신청', category: '꿀팁' });
  assert.ok(r.items.every((p) => p.category === '꿀팁'));
});
test('최신순 정렬 및 10건 페이지네이션', () => {
  const r1 = queryPosts(all, { page: 1 });
  assert.equal(r1.items.length, 10);
  assert.equal(r1.hasMore, true);
  const dates = r1.items.map((p) => p.createdAt);
  assert.deepEqual(dates, [...dates].sort().reverse());
  const r3 = queryPosts(all, { page: 3 });
  assert.equal(r3.items.length, all.length);
  assert.equal(r3.hasMore, false);
});
test('결과 0건 (E3)', () => {
  assert.equal(queryPosts(all, { q: '존재하지않는검색어zzz' }).total, 0);
});
test('데이터 형식: 필수 필드, 제목≤100, 태그≤5개·1~10자', () => {
  for (const p of all) {
    for (const k of ['id', 'title', 'category', 'tags', 'content', 'url', 'createdAt']) assert.ok(p[k] !== undefined, `${p.id} ${k}`);
    assert.ok(p.title.length <= 100);
    assert.ok(p.tags.length <= 5 && p.tags.every((t) => t.length >= 1 && t.length <= 10));
    assert.match(p.createdAt, /^\d{4}-\d{2}-\d{2}$/);
  }
});
test('하이라이트 분할', () => {
  assert.deepEqual(splitHighlight('수강신청 팁', '신청'), [
    { text: '수강', hit: false }, { text: '신청', hit: true }, { text: ' 팁', hit: false },
  ]);
});
