# everyThing (띵지대의 모든 것)

흩어진 명지대 정보와 꿀팁을 한곳에서 검색하는 읽기 전용 웹사이트입니다. 인공지능입문 PRD 과제 결과물입니다.

- 기획: `docs/PRD_everyThing.md`
- 디자인: `docs/DESIGN.md`
- 기술: Vite + React (프론트엔드 단독), 샘플 데이터 25건(`public/data/posts.json`)

> 게시글은 모두 **샘플 데이터**입니다. 실제 공지·학교 정보가 아닙니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 배포용 빌드 (dist/)
npm test         # 검색 규칙 테스트
```

## 구조

- `src/lib/search.js` 검색·필터·정렬·페이지네이션 규칙 (PRD 3장)
- `src/api/posts.js` 데이터 접근 계층. 추후 `GET /posts?q=&category=&page=`, `GET /posts/{id}` API로 이 파일만 교체
- `src/pages`, `src/components` 화면 (PRD 5장, DESIGN.md)

## 배포 (Vercel)

Import Git Repository → Framework: Vite 자동 인식 → Deploy. `vercel.json`이 새로고침 시 404를 막아 줍니다.
