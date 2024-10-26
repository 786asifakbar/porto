const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Profile Image with 3D rotation effect */}
        <img
          src="/about.png"
          alt="Profile"
          className="rounded-full w-48 h-48 md:w-96 md:h-96 mb-6 md:mb-0 md:mr-8 shadow-lg transform transition-transform duration-500 hover:rotate-6 hover:scale-105"
        />
        <div>
          {/* 3D Text Effect for Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #8e44ad, #3498db)',
              textShadow: '3px 3px 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            About Me
          </h1>
          
          {/* Paragraph with subtle color gradients */}
          <p className="text-sm md:text-md mt-4 md:mt-5 leading-relaxed text-gray-300">
            I am a passionate Frontend Developer specializing in React.js. With several years of experience,
            I have honed my skills in building responsive, user-friendly web applications. My expertise lies
            in creating interactive interfaces, optimizing performance, and ensuring a seamless user experience.
          </p>
          <p className="text-sm md:text-md mt-4 md:mt-5 leading-relaxed text-gray-300">
            In addition to my frontend skills, I have extensive experience with the MERN stack. I excel in 
            developing full-stack applications using MongoDB, Express.js, React.js, and Node.js. My MERN stack 
            development involves designing robust backend services with Node.js and Express.js, and creating 
            dynamic, data-driven frontends with React.js. I am adept at managing databases with MongoDB and 
            integrating complex functionalities to build scalable and efficient applications.
          </p>

          {/* Information Grid with 3D shadow effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm mt-5">
            {[
              { label: "Birthplace", value: "Sukkur, Sindh" },
              { label: "Born", value: "1993" },
              { label: "Residence", value: "Karachi, Pakistan" },
              { label: "Education", value: "BS(Hons) Information Technology" },
              { label: "Skills", value: "React.js, JavaScript, HTML, CSS, Tailwind CSS, MongoDB, Express.js, Node.js" },
              { label: "Experience", value: "1 year in Frontend Development" },
              { label: "Hobbies", value: "Coding, Traveling, Art" },
              { label: "Email", value: "asifakbar@meacademy.pk" },
            ].map((item, index) => (
              <div key={index} className="transition-transform duration-500 transform hover:translate-x-2 hover:-translate-y-2 shadow-lg bg-gradient-to-b from-indigo-700 to-purple-800 p-4 rounded-md">
                <p>
                  <span className="font-semibold text-blue-200">{item.label}:</span> {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Download Button with 3D hover effect */}
          <div className="mt-6">
            <a href="/Asif Akbar.pdf" download>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center transition-transform transform hover:scale-105 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;