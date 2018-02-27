import React from 'react';

const LoginForm = ({ email, password, handleInput }) => {
  return (
    <div className="login-container">
      <a href="/login/linkedin">Login With LinkedIn</a>
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
    </div>
  );
};

export default LoginForm;
