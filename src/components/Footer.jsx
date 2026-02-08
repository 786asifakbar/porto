const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Footer Text */}
        <p className="text-sm md:text-base text-center md:text-left mb-3 md:mb-0">
          &copy; 2026 <span className="font-semibold">Asif Ali</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          {[
            { href: "https://pk.indeed.com", label: "Indeed", icon: "fab fa-indeed" },
            { href: "https://linkedin.com", label: "LinkedIn", icon: "fab fa-linkedin" },
            { href: "https://github.com", label: "GitHub", icon: "fab fa-github" },
          ].map(({ href, label, icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white text-2xl hover:text-yellow-300 transition-all duration-300 transform hover:scale-125"
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Optional subtle animated background circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-700 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse-slow"></div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.2; }
          50% { transform: translateX(-50%) scale(1.1); opacity: 0.3; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite ease-in-out; }
      `}</style>
    </footer>
  );
};

export default Footer;