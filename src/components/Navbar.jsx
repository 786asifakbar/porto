import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // For routing

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo with Link to Home */}
        <NavLink to="/" aria-label="Home">
          <img src="/blue.png" alt="Logo"
            className="h-16 w-16 rounded-full shadow-lg transition-transform duration-500 
          hover:scale-105" />
        </NavLink>

        {/* Hamburger Menu Button for Mobile */}
        <button onClick={toggleDrawer} aria-label="Toggle navigation" className="md:hidden">
          <svg
            className="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          {['Home', 'About', 'Projects', 'Contact'].map((text, idx) => (
            <NavLink
              key={idx}
              exact
              to={`/${text.toLowerCase()}`}
              activeClassName="text-yellow-300 underline"
              className="hover:text-gray-300 transition duration-300 ease-out"
            >
              {text}
            </NavLink>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            { href: 'https://github.com/786asifakbar', icon: 'fab fa-github' },
            { href: 'https://twitter.com', icon: 'fab fa-twitter' },
            { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
            { href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
          ].map(({ href, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-yellow-300 transition duration-300"
            >
              <i className={`${icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Drawer for Mobile */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-indigo-600 to-purple-700 bg-opacity-95 z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out">
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-6 text-white hover:text-yellow-400 transition-transform duration-500"
            aria-label="Close navigation"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {['Home', 'About', 'Projects', 'Contact'].map((text, idx) => (
            <NavLink
              key={idx}
              exact
              to={`/${text.toLowerCase()}`}
              onClick={toggleDrawer}
              className="text-3xl text-white my-3 transition duration-300 hover:text-yellow-400"
            >
              {text}
            </NavLink>
          ))}
          {/* Social Icons in Drawer */}
          <div className="flex space-x-6 mt-6">
            {[
              { href: 'https://github.com/786asifakbar', icon: 'fab fa-github' },
              { href: 'https://twitter.com', icon: 'fab fa-twitter' },
              { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
              { href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-yellow-400 transition duration-300"
              >
                <i className={`${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* FontAwesome CSS */}
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
      `}</style>
    </nav>
  );
};
export default Navbar;