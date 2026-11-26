import { useEffect, useState } from 'react';
import { fetchPost } from '../api/posts.js';
import Badge from '../components/Badge.jsx';
import StateView from '../components/StateView.jsx';

export default function DetailPage({ id, navigate }) {
  const [post, setPost] = useState(undefined); // undefined=로딩, null=없음
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let alive = true;
    setError(false);
    setPost(undefined);
    fetchPost(id)
      .then((p) => alive && setPost(p))
      .catch(() => alive && setError(true));
    return () => { alive = false; };
  }, [id, retry]);

  const back = () => {
    // 이전 목록(검색 상태 유지)으로, 직접 진입한 경우 홈으로
    if (window.history.length > 1) window.history.back();
    else navigate('/');
  };

  if (error) return <div className="container"><StateView kind="error" onAction={() => setRetry((n) => n + 1)} /></div>;
  if (post === undefined) return <div className="container"><StateView kind="loading" /></div>;
  if (post === null) return <div className="container"><StateView kind="notfound" onAction={() => navigate('/')} /></div>;

  const backBtn = <button className="btn btn-secondary" onClick={back}>← 목록</button>;
  return (
    <article className="container detail">
      {backBtn}
      <h1 className="detail-title">{post.title}</h1>
      <div className="card-meta">
        <Badge category={post.category} />
        <time className="muted">{post.createdAt}</time>
      </div>
      <div className="tags">
        {post.tags.map((t) => <span className="tag" key={t}>#{t}</span>)}
      </div>
      {post.imageUrl && <img className="detail-img" src={post.imageUrl} alt={`${post.title} 이미지`} />}
      <div className="detail-body">{post.content}</div>
      <div className="detail-actions">
        {backBtn}
        <a className="btn btn-primary" href={post.url} target="_blank" rel="noopener noreferrer">원문 보기 ↗</a>
      </div>
    </article>
  );
}
