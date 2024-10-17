import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // For routing
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <img src="/blue.png" alt="Logo" />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="hamburger">
            <button onClick={toggleDrawer}>
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="links">
            <NavLink exact to="/" activeClassName="font-semibold">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="font-semibold">
              About
            </NavLink>
            <NavLink to="/projects" activeClassName="font-semibold">
              Projects
            </NavLink>
            <NavLink to="/contact" activeClassName="font-semibold">
              Contact
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/786asifakbar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Drawer for Mobile */}
        {drawerOpen && (
          <div className="drawer">
            <button onClick={toggleDrawer} className="absolute top-4 right-6 text-white">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <NavLink exact to="/" onClick={toggleDrawer}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleDrawer}>
              About
            </NavLink>
            <NavLink to="/projects" onClick={toggleDrawer}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={toggleDrawer}>
              Contact
            </NavLink>
            {/* Social Icons in Drawer */}
            <div className="social-icons">
              <a href="https://github.com/786asifakbar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* FontAwesome CSS */}
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
      `}</style>
    </>
  );
};

export default Navbar;