import { useCallback, useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts.js';
import { buildHome } from '../lib/router.js';
import SearchBar from '../components/SearchBar.jsx';
import PostCard from '../components/PostCard.jsx';
import StateView from '../components/StateView.jsx';

export default function HomePage({ q, category, navigate }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ok | error
  const [retry, setRetry] = useState(0);

  useEffect(() => { setPage(1); }, [q, category]);

  useEffect(() => {
    let alive = true;
    setStatus((s) => (data && page > 1 ? s : 'loading'));
    fetchPosts({ q, category, page })
      .then((r) => { if (alive) { setData(r); setStatus('ok'); } })
      .catch(() => { if (alive) setStatus('error'); });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, category, page, retry]);

  const search = useCallback((nq) => navigate(buildHome({ q: nq, category })), [navigate, category]);

  let list;
  if (status === 'error') list = <StateView kind="error" onAction={() => setRetry((n) => n + 1)} />;
  else if (status === 'loading' && !data) list = <StateView kind="loading" />;
  else if (data && data.total === 0) list = <StateView kind={q ? 'empty' : category ? 'nocategory' : 'empty'} />;
  else if (data) {
    list = (
      <>
        <div className="list-head">
          <h1 className="list-title">
            {q ? `“${q}” 검색 결과 ${data.total}건` : category ? `${category} 글 ${data.total}건` : '최신 글'}
          </h1>
        </div>
        <div className="list">
          {data.items.map((p) => (
            <PostCard key={p.id} post={p} q={q} onOpen={navigate} />
          ))}
        </div>
        {data.hasMore && (
          <button className="btn-more" onClick={() => setPage((n) => n + 1)}>
            + 더 보기 (10건 추가)
          </button>
        )}
      </>
    );
  }

  return (
    <div className="container">
      <SearchBar initial={q} onSearch={search} />
      {list}
    </div>
  );
}
