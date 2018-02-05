import React from 'react';

const RadioButtons = ({ show, handleRadio }) => {
  return (
    <div className="radio-buttons-container">
      <input
        type="radio"
        id="signup"
        name="sign-login"
        checked={show === 'signup'}
        value="signup"
        onChange={e => {
          handleRadio(e);
        }}
      />
      <label htmlFor="signup">SIGN UP</label>
      <input
        type="radio"
        id="login"
        name="sign-login"
        checked={show === 'login'}
        value="login"
        onChange={e => {
          handleRadio(e);
        }}
      />
      <label htmlFor="login">LOGIN</label>
    </div>
  );
};

export default RadioButtons;
