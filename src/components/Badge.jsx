const CLASS = {
  '학사': 'cat-academic',
  '장학': 'cat-scholar',
  '식당': 'cat-food',
  '공모전·해커톤': 'cat-contest',
  '동아리': 'cat-club',
  '꿀팁': 'cat-tip',
};
export default function Badge({ category }) {
  return <span className={`badge ${CLASS[category] ?? ''}`}>{category}</span>;
}
