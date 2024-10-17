const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-center sm:text-left mb-4 sm:mb-0">
          &copy; 2024 My Portfolio. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
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