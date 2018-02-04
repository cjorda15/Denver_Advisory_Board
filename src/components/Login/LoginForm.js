import React from 'react';

const LoginForm = ({ username, password, handleInput }) => {
  return (
    <div className="login-container">
      <input
        onChange={e => {
          handleInput(e, 'username');
        }}
        type="input"
        value={username}
        placeholder="username"
      />
      <input
        onChange={e => {
          handleInput(e, 'password');
        }}
        type="input"
        value={password}
        placeholder="password"
      />
    </div>
  );
};

export default LoginForm;
