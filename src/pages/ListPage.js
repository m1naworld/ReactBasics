import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;
const ListPage = () => {
  const [id, setId] = useState(6);
  console.log('id: ', id);
  const [post, setPost] = useState({ id: id, title: '', content: '' });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용1' },
    { id: 3, title: '제목3', content: '내용1' },
    { id: 4, title: '제목4', content: '내용1' },
    { id: 5, title: '제목5', content: '내용1' },
  ]);

  const handleWrite = () => {
    setId(id + 1);
    setPosts([...posts, { ...post, id: id }]);
  };

  const handleForm = (e) => {
    //computed property names 문법 (키값 동적할당)
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1> 리스트 페이지 </h1>
      <hr />
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요.."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요.."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      {posts.map((post, idx) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} / 제목: {post.title} / 내용: {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
