# everyThing (띵지대의 모든 것) - Design System Specification (DESIGN.md)

> **버전**: v1.3  
> **서비스명**: everyThing (띵지대의 모든 것)  
> **서비스 정의**: 흩어진 명지대 공지·정보를 10초 만에 키워드로 찾는 순수 검색 포털 (No-Auth, Read-Only)  
> **디자인 테마**: Academic Modernism (미니멀 검색 중심 & 학교 대표 네이비 `#1E293B`)

---

## 1. 디자인 철학 및 원칙 (Design Principles)

1. **Pure Search & Read-Only Focus (순수 검색 중심의 읽기 전용 서비스)**
   - 회원가입/로그인 및 개인화 기능(좋아요, 스크랩, 마이페이지)이 일절 없으며, 접속 즉시 10초 이내에 원하는 정보를 검색어나 카테고리로 찾을 수 있는 극도의 직관성을 추구합니다.
2. **Strict Scope Compliance (PRD 엄격 준수 및 장식 배제)**
   - 출처(에브리타임, 행정부서명 등), '10초 핵심 요약 블록', 조회수, 스크랩 수, 외부 학교 바로가기, 임의의 추천 칩(검색창 하단 추천 태그, 검색 결과 0건 추천 키워드 등)을 전면 배제하고, 핵심 메타(카테고리 뱃지, 작성일, 태그)와 본문에만 집중합니다.
3. **Institutional Navy Consistency (학교 대표 네이비 중심의 일관성)**
   - 주요 조작 요소([검색] 버튼, [원문 보기] 버튼, [홈으로/다시 시도] 복구 버튼, 활성화된 카테고리 탭)는 모두 명지대 고유의 **네이비(`#1E293B`)**로 통일합니다.
   - 포인트 파란색(`#2563EB`)은 인라인 텍스트 링크와 폼 인풋 포커스 아웃라인에만 제한적으로 사용합니다.
4. **Predictable Exception Feedback (명확하고 친절한 예외 처리)**
   - 빈 검색어, 30자 초과 검색어, 검색 결과 0건, 데이터 로딩 실패, 유효하지 않은 주소 등 6대 예외 상황(E1~E6)에 대해 사용자가 헤매지 않도록 명확한 피드백과 원클릭 복구 동선을 제공합니다.

---

## 2. 컬러 시스템 (Color Palette)

### 2.1 Brand & Action Colors
- **Primary Navy (학교 대표색 / 주요 버튼 / 활성 탭)**: `#1E293B` (Slate 800)
- **Primary Navy Hover**: `#0F172A` (Slate 900)
- **Secondary Gray (보조 버튼 [← 목록])**: `#F1F5F9` (Slate 100), Hover `#E2E8F0` (Slate 200)
- **Link & Focus Blue**: `#2563EB` (Blue 600) — 링크 텍스트 및 입력창 포커스 아웃라인 전용
- **Focus Ring Subtle**: `rgba(37, 99, 235, 0.15)`

### 2.2 Surface & Neutral Colors
- **Background Main**: `#F8FAFC` (Slate 50)
- **Surface / Card Background**: `#FFFFFF` (White)
- **Surface Container Muted**: `#F1F5F9` (Slate 100)
- **Border Default**: `#E2E8F0` (Slate 200)
- **Border Input Default**: `#CBD5E1` (Slate 300)
- **Text Primary (Headings / Title)**: `#0F172A` (Slate 900)
- **Text Secondary (Body / Subtitles)**: `#475569` (Slate 600)
- **Text Muted (Placeholders / Dates)**: `#94A3B8` (Slate 400)
- **Text Inverse**: `#FFFFFF` (White)

### 2.3 Category Badges (PRD 6대 카테고리 시맨틱 컬러 분리)
| 카테고리 | 배경색 (Background) | 텍스트색 (Text) | 보더색 (Border) | 시각적 특징 / 구분 |
|---|---|---|---|---|
| **학사** | `#EFF6FF` | `#1D4ED8` | `#BFDBFE` | 신뢰감 있는 소프트 블루 |
| **장학** | `#FEF3C7` | `#B45309` | `#FDE68A` | 장학금 전용 웜 앰버(Warm Amber) |
| **식당** | `#ECFDF5` | `#047857` | `#A7F3D0` | 청결한 에메랄드 그린 |
| **공모전·해커톤** | `#F5F3FF` | `#6D28D9` | `#DDD6FE` | 창의적인 바이올렛 퍼플 |
| **동아리** | `#FDF2F8` | `#BE185D` | `#FBCFE8` | 활기찬 로즈 핑크 |
| **꿀팁** | `#FFF7ED` | `#C2410C` | `#FFEDD5` | 장학과 명확히 구별되는 비비드 오렌지(Vivid Orange) |

> **장학 vs 꿀팁 색상 차별화 가이드**:  
> - **장학**: 골드·앰버 계열(배경 `#FEF3C7`, 텍스트 `#B45309`, 테두리 `#FDE68A`)  
> - **꿀팁**: 웜 오렌지 계열(배경 `#FFF7ED`, 텍스트 `#C2410C`, 테두리 `#FFEDD5`)로 분리하여 목록 탐색 시 두 카테고리가 겹쳐 보이지 않도록 시각적 구분을 명확히 확립.

### 2.4 Highlight & State Colors
- **검색어 일치 하이라이트**: Background `#FEF08A` (Yellow 200), Text `#0F172A`
- **오류 / 경고 안내 (30자 초과, 빈 검색어 등)**: `#EF4444` (Red 500) / Background `#FEF2F2` (Red 50)

---

## 3. 타이포그래피 (Typography)

- **글꼴 스택**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Pretendard`, `sans-serif`

| 계층 | 크기 (Desktop) | Weight | Line Height | 용도 |
|---|---|---|---|---|
| **Heading 1** | `24px` (1.5rem) | 700 (Bold) | 1.35 | 상세페이지 글 제목, 검색 결과 요약 헤더 |
| **Heading 2** | `18px` (1.125rem) | 600 (Semibold) | 1.4 | 목록 카드 제목, 예외 상태 타이틀 |
| **Body Large** | `16px` (1rem) | 400 / 500 | 1.6 | 검색창 입력 텍스트, 상세페이지 본문 단락 |
| **Body Default** | `14px` (0.875rem) | 400 / 500 | 1.5 | 카드 본문 미리보기(앞 50자), 최신 글 목록 제목, 안내 문구 |
| **Caption / Badge**| `12px` (0.75rem) | 500 / 600 | 1.4 | 카테고리 뱃지, 작성일(YYYY-MM-DD), 태그(#태그) |

> **타이틀 정책**: 홈 화면의 중앙 대형 메인 타이틀("띵지대의 모든 것, 한 번에 검색" 등) 문구는 시각적 간결성과 검색 본연의 집중도를 위해 전면 제거하며, 브랜드 및 서비스명은 상단 네비게이션 바(`everyThing | 띵지대의 모든 것`)에서만 표현합니다.

---

## 4. 컴포넌트 시스템 명세 (Component Patterns)

### 4.1 상단 네비게이션 바 (Top Navigation Bar)
- **구조**: 고정형(`sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 h-16`)
- **포함 요소**:
  - **좌측**: 서비스 로고 마크 + `everyThing` + `띵지대의 모든 것` 서브 텍스트
  - **중앙**: 7개 카테고리 탭 메뉴 (`전체`, `학사`, `장학`, `식당`, `공모전·해커톤`, `동아리`, `꿀팁`)
    - **선택 상태**: `bg-[#1E293B] text-white rounded-full px-4 py-1.5 font-semibold shadow-sm`
    - **미선택 상태**: `text-slate-600 hover:text-slate-900 px-3.5 py-1.5 transition`
- **배제 요소 (PRD 준수)**: 로그인/회원가입, 프로필 아이콘, 외부 바로가기 아웃링크, 캠퍼스 구분 뱃지 일체 없음.

### 4.2 메인 검색창 (Search Bar)
- **컨테이너**: `w-full max-w-2xl mx-auto rounded-2xl bg-white border border-slate-300 shadow-sm flex items-center p-2 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition`
- **인풋**: `flex-1 px-4 py-2.5 text-slate-900 placeholder-slate-400 text-base outline-none`
  - 플레이스홀더: `"궁금한 명지대 정보를 검색해 보세요"`
  - 입력 제약: 1~30자 (앞뒤 공백 제거)
- **[검색] 버튼**: `bg-[#1E293B] hover:bg-[#0F172A] text-white font-medium px-6 py-2.5 rounded-xl transition flex items-center gap-2`
- **배제 요소**: 검색창 하단의 추천 태그 칩/인기 검색어 칩 일체 없음.

### 4.3 홈 화면 구조 (Home Screen Composition)
홈 화면은 불필요한 장식 문구 없이 상단바 서비스명과 검색창, 그리고 그 아래 최신 글 카드 10건과 [더 보기] 버튼으로 직관적으로 구성됩니다:
1. **상단 네비게이션 바**: 서비스명(`everyThing | 띵지대의 모든 것`) 및 7개 카테고리 탭
2. **검색 영역**: 상단 대형 메인 타이틀 없이 바로 검색창 배치 (`max-w-2xl mx-auto mt-8 mb-8`)
3. **최신 글 카드 10건 목록**:
   - 검색창 하단에 조건 없는 최신 등록 글 10건을 최신순으로 표시
   - 카드 구성: 카테고리 뱃지 + 제목 + 작성일(YYYY-MM-DD)
4. **[더 보기] 버튼**:
   - 10건 카드 목록 최하단에 배치 (`+ 더 보기 (10건 추가)`)
   - 클릭 시 다음 10건을 최신순으로 추가 조회

### 4.4 게시글 카드 (Post Card Item - 엄격한 4단 구성)
- **스타일**: `bg-white rounded-2xl border border-slate-200 p-5 md:p-6 hover:border-slate-300 hover:shadow-sm transition`
- **계층 구성**:
  1. **메타 행**: 카테고리 뱃지 (`학사`, `장학` 등) + 작성일자 (`YYYY-MM-DD`, `text-slate-400 text-xs`) *(출처/부서명 절대 표기 금지)*
  2. **제목**: 검색어 일치 시 `<mark>` 태그로 노란색(`#FEF08A`) 하이라이팅 적용
  3. **본문 미리보기**: 본문 앞 50자 요약 노출 (`line-clamp-2 text-slate-600 text-sm`)
  4. **태그 행**: `#태그명` 형태의 칩 리스트 (`text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-xs`)

### 4.5 게시글 상세 화면 (Post Detail Screen)
- **최상단**: 회색 **[← 목록]** 버튼 (`bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium`)
- **타이틀 및 메타**: 대형 제목 (`text-2xl md:text-3xl font-bold text-slate-900`) + 카테고리 뱃지 + 작성일자 (`YYYY-MM-DD`) *(출처 없음)*
- **태그 리스트**: `#수강신청`, `#장바구니`, `#학사일정` 등
- **이미지 영역**: 첨부 이미지가 있는 경우에만 표시 (없으면 영역 자체 숨김)
- **본문 영역**: 가독성 높은 폰트와 줄간격(leading-relaxed)을 갖춘 전체 내용
- **하단 탐색 바**:
  - 좌측: 회색 **[← 목록]** 버튼
  - 우측: 네이비 **[원문 보기 ↗]** 버튼 (`bg-[#1E293B] hover:bg-[#0F172A] text-white px-6 py-2.5 rounded-xl font-medium`) — 클릭 시 원문 링크를 새 탭으로 연다
- **제외 요소**: `10초 핵심 요약` 블록, 조회수/스크랩 수 카운터 일체 제거

### 4.6 버튼 시스템 (Button Hierarchy)
- **Primary Navy Action ([검색], [원문 보기], [홈으로], [다시 시도])**:
  - `bg-[#1E293B] hover:bg-[#0F172A] text-white font-medium rounded-xl px-5 py-2.5 transition text-sm`
- **Secondary Gray Action ([← 목록])**:
  - `bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl px-4 py-2 transition text-sm`
- **Pagination Action ([+ 더 보기 (10건 추가)])**:
  - `w-full py-3.5 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl transition text-center text-sm`

---

## 5. 예외 상태 디자인 (Exception & Error State Patterns)

PRD Section 4 & 5 기준 6대 예외 상태 표준 컴포넌트 명세:

| 케이스 | 트리거 상황 | UI 구성 요소 및 노출 문구 | 복구 액션 및 제약 |
|---|---|---|---|
| **E1. 빈 검색어** | 검색어 미입력 상태에서 [검색] 클릭 시 | 검색창 하단 붉은색 안내 문구: `"검색어를 입력해 주세요."` | 입력창 포커스 유지 (목록 변경 없음) |
| **E2. 검색어 30자 초과** | 30자를 초과한 검색어 입력 후 [검색] 시 | 검색창 하단 붉은색 안내 문구: `"검색어는 30자까지 입력할 수 있어요."` | 입력창 포커스 유지 및 수정 유도 |
| **E3. 검색 결과 0건** | 조건에 일치하는 글이 없을 때 | 빈 돋보기 아이콘 + `"검색 결과가 없어요. 다른 키워드로 검색하거나 카테고리를 선택해 보세요."` | 추천 키워드 칩 일체 노출하지 않음 (단순 안내) |
| **E4. 로딩 실패** | 데이터 조회 중 네트워크/서버 에러 | 경고 심볼 아이콘 + `"정보를 불러오지 못했어요."` | 네이비 **[다시 시도]** 버튼 (`bg-[#1E293B]`) |
| **E5. 유효하지 않은 주소** | 존재하지 않거나 삭제된 게시글 ID 접속 시 | 경로 없음 심볼 + `"글을 찾을 수 없어요. 삭제되었거나 주소가 잘못되었을 수 있어요."` | 네이비 **[홈으로]** 버튼 (`bg-[#1E293B]`) |
| **E6. 카테고리 글 0건** | 해당 카테고리에 등록된 글이 없을 때 | 빈 서류 아이콘 + `"아직 등록된 글이 없어요."` | 전체 탭 또는 타 카테고리 탭 탐색 유도 |

---

## 6. 레이아웃 & 반응형 규격 (Layout & Breakpoints)

- **컨테이너 최대 너비**:
  - 상단 네비게이션: `max-w-7xl mx-auto px-4` (1280px)
  - 홈 중앙 검색 영역: `max-w-2xl mx-auto` (672px)
  - 검색 결과 목록 & 상세 본문 & 홈 최신 글 목록: `max-w-4xl mx-auto` (896px)
- **반응형 (Mobile < 768px)**:
  - 상단 카테고리 탭: 가로 스와이프 스크롤 (`overflow-x-auto whitespace-nowrap scrollbar-none`)
  - 카드 패딩: 데스크톱 `p-6` → 모바일 `p-4`
  - 액션 버튼: 모바일 환경에서 터치 영역 확보 (최소 높이 44px)
- **간격(Spacing) 및 라운드니스(Radius)**:
  - 기본 간격 단위: 4px 베이스 시스템 (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`)
  - 칩 / 뱃지: `rounded-full` (9999px)
  - 버튼 / 인풋: `rounded-xl` (12px)
  - 카드 / 컨테이너: `rounded-2xl` (16px)
