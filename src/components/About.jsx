const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-blue-900 to-gray-900 text-white p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center animate-fadeRight">
        <img
          src="/about.png"
          alt="Profile"
          className="rounded-full w-48 h-48 md:w-96 md:h-96 mb-6 md:mb-0 md:mr-6 animate-zoomIn"
        />
        <div className="animate-fadeLeft">
          <h1 className="text-5xl md:text-7xl font-bold">About Me</h1>
          <p className="text-sm md:text-md mt-4 md:mt-5">
            I am a passionate Frontend Developer specializing in React.js. With several years of experience,
            I have honed my skills in building responsive, user-friendly web applications. My expertise lies
            in creating interactive interfaces, optimizing performance, and ensuring a seamless user experience.
          </p>
          <p className="text-sm md:text-md mt-4 md:mt-5">
            In addition to my frontend skills, I have extensive experience with the MERN stack. I excel in 
            developing full-stack applications using MongoDB, Express.js, React.js, and Node.js. My MERN stack 
            development involves designing robust backend services with Node.js and Express.js, and creating 
            dynamic, data-driven frontends with React.js. I am adept at managing databases with MongoDB and 
            integrating complex functionalities to build scalable and efficient applications.
          </p>
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
              <div className={`animate-fadeUp delay-${index * 50}`} key={index}>
                <p><span className="font-semibold">{item.label}:</span> {item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 animate-fadeUp delay-600">
            <a href="/Asif Akbar.pdf" download>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
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