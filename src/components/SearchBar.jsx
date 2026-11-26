import { useEffect, useRef, useState } from 'react';
import { validateQuery } from '../lib/search.js';

export default function SearchBar({ initial, onSearch }) {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState('');
  const ref = useRef(null);
  useEffect(() => { setValue(initial); setError(''); }, [initial]);

  const submit = (e) => {
    e.preventDefault();
    const r = validateQuery(value);
    if (!r.ok) {
      setError(r.error); // E1, E2: 목록은 바꾸지 않고 포커스 유지
      ref.current?.focus();
      return;
    }
    setError('');
    onSearch(r.q);
  };

  return (
    <form className="search-wrap" onSubmit={submit} noValidate>
      <div className={'search' + (error ? ' search-error' : '')}>
        <input
          ref={ref}
          className="search-input"
          type="text"
          value={value}
          placeholder="궁금한 명지대 정보를 검색해 보세요"
          aria-label="검색어"
          aria-invalid={!!error}
          onChange={(e) => { setValue(e.target.value); if (error) setError(''); }}
        />
        <button type="submit" className="btn btn-primary">검색</button>
      </div>
      {error && <p className="field-error" role="alert">{error}</p>}
    </form>
  );
}
