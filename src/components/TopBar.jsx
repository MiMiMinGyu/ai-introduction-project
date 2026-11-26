import { CATEGORIES } from '../lib/search.js';

const TABS = ['', ...CATEGORIES];

export default function TopBar({ category, onSelect, onLogo }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="logo" onClick={onLogo} aria-label="everyThing 홈">
          <span className="logo-mark">e</span>
          <span className="logo-text">everyThing</span>
          <span className="logo-sub">띵지대의 모든 것</span>
        </button>
        <nav className="tabs" aria-label="카테고리">
          {TABS.map((c) => (
            <button
              key={c || 'all'}
              className={'tab' + (category === c ? ' tab-active' : '')}
              aria-current={category === c ? 'page' : undefined}
              onClick={() => onSelect(c)}
            >
              {c || '전체'}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
