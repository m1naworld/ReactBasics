import styled from 'styled-components';

const FooterList = styled.div`
  border: 1px soild black;
  height: 300px;
`;

export const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li> 오시는 길 </li>
        <li> 전화번호 </li>
      </ul>
    </FooterList>
  );
};
