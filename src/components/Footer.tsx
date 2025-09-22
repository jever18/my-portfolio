// src/components/Footer.tsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          Dibuat dengan ❤️ &nbsp; oleh [Jever18]
        </p>
        <div className="d-flex justify-content-center">
          <a href="https://github.com/jever18" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://linkedin.com/in/jeverduly" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://instagram.com/jeverduly" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
