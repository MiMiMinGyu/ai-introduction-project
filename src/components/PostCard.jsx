import Badge from './Badge.jsx';
import Highlight from './Highlight.jsx';

export default function PostCard({ post, q, onOpen }) {
  const preview = post.content.length > 50 ? post.content.slice(0, 50) + '…' : post.content;
  const href = `/posts/${post.id}`;
  const click = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    onOpen(href);
  };
  return (
    <a className="card" href={href} onClick={click}>
      <div className="card-meta">
        <Badge category={post.category} />
        <time className="muted">{post.createdAt}</time>
      </div>
      <h2 className="card-title"><Highlight text={post.title} q={q} /></h2>
      <p className="card-preview">{preview}</p>
      <div className="tags">
        {post.tags.map((t) => <span className="tag" key={t}>#{t}</span>)}
      </div>
    </a>
  );
}
