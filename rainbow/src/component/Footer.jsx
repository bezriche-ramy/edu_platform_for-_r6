import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Rainbow Six Siege Guide. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#category">Categories</a>
          <a href="#latest-news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
