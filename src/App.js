import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './components/Top';
import Bottom from './components/Bottom';
import './App.css';
// 글쓰기, 글삭제, 글목록보기

const App = () => {
  return (
    <div className="container">
      <h1> 최상단 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
};

export default App;
