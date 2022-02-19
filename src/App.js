// const a = {
//   backgroundColor: 'red',
// };
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
// function App() {
//   return (
//     <div>
//       <div style={a}> 안녕 </div>;<div className="box-style">헬로</div>
//     </div>
//   );
// }

// styled-component

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login/:id" exact={true} element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
