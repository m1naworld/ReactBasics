import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Home from '../components/Home';

const HomePage = () => {
  // http 요청 (fetch, axios)

  // 상태값은 컴포넌트가 아니라 페이지에서!
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 빈 배열 한번만 실행
  useEffect(() => {
    // 다운로드 가정 (다운로드 -> io발생 -> 다운로드 동안 blocking 발생 -> fetch(), axios() 는 비동기로 돌기 때문에 상태 데어터여야함
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);

  return (
    <div>
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
    </div>
  );
};

export default HomePage;
