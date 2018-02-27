import React from 'react';

const SignupForm = ({ password, retypePassword, email, handleInput }) => {
  return (
    <div className="signup-container">
      <a href="/signup/linkedin">Signup With LinkedIn</a>
      <input
        onChange={e => {
          handleInput(e, 'email');
        }}
        type="input"
        value={email}
        placeholder="email"
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
    </div>
  );
};

export default SignupForm;
