import React from 'react'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="google.com" className="navbar-brand">Khana</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="google.com" className="nav-link">FAQs</a>
            </li>
            <li className="nav-item">
              <a href="google.com" className="nav-link">How it Works</a>
            </li>
            <li className="nav-item">
              <a href="google.com" className="nav-link">Menu</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav; 