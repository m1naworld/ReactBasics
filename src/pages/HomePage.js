import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  position: absolute;
  margin-left: ${(props) => props.position};
  margin-top: -150px;
  float: left;
  background-color: ${(props) => (props.now ? 'red' : 'blue')};
`;

const HomePage = () => {
  console.log('λλλ§ π¦ ');
  //   const love = 'μλ κ³½μμΌ λλ λμ κ·μΌλ₯μ΄ λ―ΌμμΌ.';
  const [now, setNow] = useState(true);
  const [other, setOther] = useState(false);

  const changeColor = () => {
    console.log('π changeColor μ€ν');
    return setNow(!now);
  };

  return (
    <div>
      <HomeDiv now={now} position="-30%">
        <button onClick={changeColor}>Color Change</button>
      </HomeDiv>
      <HomeDiv now={other}>
        <button onClick={() => setOther(!other)}>Color Change</button>
      </HomeDiv>
    </div>
  );
};

export default HomePage;
