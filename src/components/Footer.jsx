import './Footer.css'; // Importing the external CSS file

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <p className="text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2024 My Portfolio. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;