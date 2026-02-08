const About = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
      px-4 py-12 sm:px-6 md:px-10
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden"
      style={{
        backgroundImage: "url(other.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Paper */}
      <div
        className="
        relative w-full max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-5xl
        bg-white/95 text-gray-800
        rounded-lg shadow-2xl
        p-5 sm:p-6 md:p-10
        animate-[float_7s_ease-in-out_infinite]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.025), rgba(0,0,0,0.025) 1px, transparent 1px, transparent 22px)",
          clipPath:
            "polygon(0 0, 100% 0, 100% 96%, 97% 100%, 3% 100%, 0 96%)",
        }}
      >
        {/* Pin */}
        <div
          className="
          absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2
          w-5 h-5 sm:w-6 sm:h-6
          bg-red-600 rounded-full shadow-lg
          border-4 border-white"
        />

        {/* Heading */}
        <h1
          className="
          text-center mb-4 sm:mb-6
          text-3xl sm:text-4xl md:text-5xl
          font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          About Me
        </h1>

        {/* Text */}
        <p className="text-sm sm:text-base leading-relaxed">
          Hi, I’m <span className="font-semibold text-purple-600">Asif Ali</span> — a passionate
          <span className="font-semibold"> MERN Stack Developer</span> focused on building
          modern, responsive, and high-performance web applications using
          React, Node.js, Express, MongoDB, HTML, CSS, and JavaScript.
        </p>

        <p className="text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
          I’ve worked on NGO platforms, portfolio websites, and full-stack projects,
          emphasizing clean architecture, smooth UI/UX, and scalability.
        </p>

        <p className="mt-3 sm:mt-4 font-semibold text-purple-600 text-sm sm:text-base">
          Let’s build something impactful together 🚀
        </p>

        {/* Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
          {/* Skills */}
          <div
            className="
            relative bg-yellow-100 p-4 sm:p-5
            rounded-md shadow-xl
            rotate-[-1deg] sm:rotate-[-2deg]
            hover:rotate-0 transition-transform"
          >
            <div className="absolute -top-2 left-4 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full" />
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
              Skills
            </h3>
            <p className="text-xs sm:text-sm">
              React, Tailwind CSS, JavaScript, Node.js, Express.js,
              MongoDB, REST APIs, Git & GitHub
            </p>
          </div>

          {/* Experience */}
          <div
            className="
            relative bg-green-100 p-4 sm:p-5
            rounded-md shadow-xl
            rotate-[1deg] sm:rotate-[2deg]
            hover:rotate-0 transition-transform"
          >
            <div className="absolute -top-2 left-4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full" />
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
              Experience
            </h3>
            <p className="text-xs sm:text-sm">
              MERN Stack Developer with hands-on experience in NGO projects,
              portfolios, and full-stack applications.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 sm:mt-8 text-center">
          <a href="/Asif Akbar.pdf" download>
            <button
              className="
              bg-purple-600 hover:bg-purple-700 text-white
              text-sm sm:text-base
              font-semibold
              py-2 px-5 sm:px-6
              rounded-md shadow-lg
              transition-transform hover:scale-105"
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default About;