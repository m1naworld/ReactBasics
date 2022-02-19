import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

// 스타일 확장 상속
const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  console.log(props.boards);

  // 구조 분할 할당
  const { boards, setBoards, number, setNumber, user } = props;

  // 부모로 부터 받아온 어떤 데이터를 가지고 스타일링을 동적으로 할 것이라면?

  return (
    <div>
      <Button variant="success">Success</Button>
      <StyledAddButton user={user}> 더하기 </StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체 삭제
      </StyledDeleteButton>
      <h1> 홈: {number} </h1>
      <button onClick={() => setNumber(number + 1)}> 번호 증가 </button>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((n) => (
        <h3>
          제목: {n.title} 내용: {n.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
