import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}> 뒤로가기 </button>
      <button onClick={() => navigate('/')}> 홈으로 가기 </button>
      <Login />
    </div>
  );
};

export default LoginPage;
