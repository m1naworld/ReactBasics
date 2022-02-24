import React, { useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';

const MainHome = styled.div`
  align-items: center;
  text-align: center;
  height: 70px;
  margin: 1% 0%;
`;

const UserPage = () => {
  const [users, setUsers] = useState([{ name: '송민아', age: 27 }]);
  const [user, setUser] = useState([{ name: '', age: null }]);

  const inputContent = (e) => {
    console.log(e.target.value);
    const addUser = { [e.target.name]: e.target.value };
    return setUser({ ...user, ...addUser });
  };
  const updateButton = () => {
    return setUsers([...users, { ...user }]);
  };

  const resetButton = () => {
    return setUsers([]);
  };

  return (
    <div className="div">
      <MainHome>
        <b>Welcome MinaWorld</b>
      </MainHome>
      <div className="div">
        <Stack direction="horizontal" gap={3}>
          <input
            type="text"
            placeholder="이름을 입력하세요!"
            value={users.name}
            onChange={inputContent}
            name="name"
          />
          <input
            type="text"
            placeholder="나이를 입력하세요!"
            value={users.age}
            onChange={inputContent}
            name="age"
          />
          <Button variant="secondary" onClick={updateButton}>
            Submit
          </Button>
          <Button variant="outline-danger" onClick={resetButton}>
            Reset
          </Button>
        </Stack>
      </div>
      {users.map((n) => (
        <MainHome>
          이름: {n.name} & 나이: {n.age}
        </MainHome>
      ))}
    </div>
  );
};

export default UserPage;
