const Footer = () => {
  return (
    <footer className="relative py-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Text */}
        <p className="text-center md:text-left text-sm md:text-base">
          &copy; 2026 My Portfolio. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none rounded-t-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10"></div>
    </footer>
  );
};

export default Footer;
