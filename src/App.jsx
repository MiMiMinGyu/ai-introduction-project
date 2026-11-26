import { useLocation, parseLocation, buildHome } from './lib/router.js';
import TopBar from './components/TopBar.jsx';
import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import StateView from './components/StateView.jsx';

export default function App() {
  const [loc, navigate] = useLocation();
  const route = parseLocation(loc);
  const goHome = (next) => navigate(buildHome(next));

  let body;
  if (route.postId) {
    body = <DetailPage id={route.postId} navigate={navigate} />;
  } else if (route.isHome) {
    body = <HomePage q={route.q} category={route.category} navigate={navigate} />;
  } else {
    // 알 수 없는 주소 → E5
    body = <StateView kind="notfound" onAction={() => goHome()} />;
  }

  return (
    <>
      <TopBar
        category={route.postId ? '' : route.category}
        onSelect={(c) => goHome({ q: '', category: c })}
        onLogo={() => goHome()}
      />
      <main className="main">{body}</main>
    </>
  );
}
