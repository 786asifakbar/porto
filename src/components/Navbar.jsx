import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // For routing

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="nav-container flex justify-between items-center p-4">
          {/* Logo */}
          <div className="logo">
            <img src="/blue.png" alt="Logo" className="h-10" />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="hamburger md:hidden">
            <button onClick={toggleDrawer} aria-label="Toggle navigation">
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
          <div className="links hidden md:flex space-x-4">
            <NavLink exact to="/" activeClassName="font-semibold" className="hover:text-gray-300">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="font-semibold" className="hover:text-gray-300">
              About
            </NavLink>
            <NavLink to="/projects" activeClassName="font-semibold" className="hover:text-gray-300">
              Projects
            </NavLink>
            <NavLink to="/contact" activeClassName="font-semibold" className="hover:text-gray-300">
              Contact
            </NavLink>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons hidden md:flex space-x-4">
            <a href="https://github.com/786asifakbar" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-gray-300"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-gray-300"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-gray-300"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-gray-300"></i>
            </a>
          </div>
        </div>

        {/* Drawer for Mobile */}
        {drawerOpen && (
          <div className="drawer fixed inset-0 bg-blue-600 bg-opacity-95 z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform">
            <button onClick={toggleDrawer} className="absolute top-4 right-6 text-white" aria-label="Close navigation">
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
            <NavLink exact to="/" onClick={toggleDrawer} className="text-2xl text-white my-2">
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleDrawer} className="text-2xl text-white my-2">
              About
            </NavLink>
            <NavLink to="/projects" onClick={toggleDrawer} className="text-2xl text-white my-2">
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={toggleDrawer} className="text-2xl text-white my-2">
              Contact
            </NavLink>
            {/* Social Icons in Drawer */}
            <div className="social-icons flex space-x-4 mt-6">
              <a href="https://github.com/786asifakbar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-3xl hover:text-gray-300"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-3xl hover:text-gray-300"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-3xl hover:text-gray-300"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-3xl hover:text-gray-300"></i>
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