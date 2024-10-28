const Footer = () => {
  return (
    <footer className="text-white py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Centered Text */}
        <p className="text-center mb-4">
          &copy; 2024 My Portfolio. All rights reserved.
        </p>

        {/* Centered Social Media Icons */}
        <div className="flex space-x-4 justify-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-200"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-200"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-200"
            aria-label="GitHub"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;