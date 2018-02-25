import React from 'react';

const LoginForm = ({ email, password, handleInput }) => {
  return (
    <div className="login-container">
      <input
        onChange={e => {
          handleInput(e, 'email');
        }}
        type="input"
        value={email}
        placeholder="Email"
      />
      <input
        onChange={e => {
          handleInput(e, 'password');
        }}
        type="password"
        value={password}
        placeholder="Password"
      />
      <a href="/login/linkedin">Login With LinkedIn</a>
    </div>
  );
};

export default LoginForm;
