import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from "react-icons/fi";

const sections = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/blue.png"
            alt="Asif Akbar"
            className="h-10 w-10 rounded-full"
          />
          {/* <span className="font-bold text-lg text-gray-800 dark:text-white">
            Asif Akbar
          </span> */}
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `font-medium transition relative
                ${isActive
                  ? "text-purple-600 dark:text-purple-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-600"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-600"}`
              }
            >
              {name}
            </NavLink>
          ))}

          {/* CV Button */}
          <a
            href="/Asif Akbar.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-md
            bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition"
          >
            <FiDownload /> CV
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-gray-800 dark:text-white"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50">
          <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-900 p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700 dark:text-white"
            >
              <FiX />
            </button>

            <div className="mt-16 flex flex-col gap-6">
              {sections.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600"
                >
                  {name}
                </NavLink>
              ))}

              <a
                href="/Asif Akbar.pdf"
                download
                className="flex items-center gap-2 mt-4 px-4 py-2 rounded-md
                bg-purple-600 text-white font-semibold"
              >
                <FiDownload /> Download CV
              </a>

              <button
                onClick={() => setDark(!dark)}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                {dark ? <FiSun /> : <FiMoon />}
                Toggle Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;