const VIEWS = {
  empty: { icon: '🔍', title: '검색 결과가 없어요. 다른 키워드로 검색하거나 카테고리를 선택해 보세요.' }, // E3
  error: { icon: '⚠️', title: '정보를 불러오지 못했어요.', action: '다시 시도' }, // E4
  notfound: { icon: '🧭', title: '글을 찾을 수 없어요. 삭제되었거나 주소가 잘못되었을 수 있어요.', action: '홈으로' }, // E5
  nocategory: { icon: '📄', title: '아직 등록된 글이 없어요.' }, // E6
  loading: { icon: '', title: '불러오는 중이에요.' },
};

export default function StateView({ kind, onAction }) {
  const v = VIEWS[kind];
  return (
    <div className="state" role={kind === 'error' ? 'alert' : 'status'}>
      {v.icon && <div className="state-icon" aria-hidden="true">{v.icon}</div>}
      <p className="state-title">{v.title}</p>
      {v.action && <button className="btn btn-primary" onClick={onAction}>{v.action}</button>}
    </div>
  );
}
