import React from 'react';
import { useAuthContext } from '../../Authorize/AuthContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  
  const handleLogin = () => {
    let user = {
      firstName: 'him',
      lastName: 'himmy',
      email: 'this@that.com',
      password: '123',
      member: 'this',
      id: uuidv4(),
    };

    // Dispatch the LOGIN action with the user object
    dispatch({ type: 'LOGIN', payload: user });

    // After dispatching, navigate to the app home page with the user ID in the URL
    navigate(`/home/${user.id}`);
  };

  return (
    <div>
      Login
      <button onClick={handleLogin}>Click me</button>
    </div>
  );
}

export default Login;
