import { splitHighlight } from '../lib/search.js';

export default function Highlight({ text, q }) {
  return splitHighlight(text, q).map((s, i) =>
    s.hit ? <mark key={i}>{s.text}</mark> : <span key={i}>{s.text}</span>
  );
}
