import React from 'react';

const SignupForm = ({
  username,
  password,
  retypePassword,
  email,
  handleInput
}) => {
  return (
    <div className="signup-container">
      <input
        onChange={e => {
          handleInput(e, 'username');
        }}
        type="input"
        value={username}
        placeholder="username"
      />
      <input
        type="password"
        onChange={e => {
          handleInput(e, 'password');
        }}
        value={password}
        placeholder="password"
      />
      <input
        type="password"
        onChange={e => {
          handleInput(e, 'retypePassword');
        }}
        value={retypePassword}
        placeholder="retype-password"
      />
      <input
        onChange={e => {
          handleInput(e, 'email');
        }}
        type="input"
        value={email}
        placeholder="email"
      />
    </div>
  );
};

export default SignupForm;
