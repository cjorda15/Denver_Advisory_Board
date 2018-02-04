import React from 'react';
import './footer.scss';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="app-footer">
      <div className="copyright-container">
        © {year} Denver Advisory Board — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
