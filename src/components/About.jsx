const About = () => {
  return (
    <div 
       className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 
       text-white p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between
       shadow-2xl relative overflow-hidden"
      style={{
        backgroundImage: 'url(other.png)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        {/* 3D Text Effect for Heading */}
        <h1
           className="services-title fade-up text-center mb-10 text-5xl font-extrabold
           text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-600 
           tracking-wide text-shadow-lg" 
          style={{ textShadow: '1px 1px 2px rgba(246, 241, 246, 0.6)' }} // Purple shadow
        >
          About Me
        </h1>

        {/* Paragraph with subtle color gradients */}
        <p className="text-sm md:text-md mt-4 md:mt-5 leading-relaxed text-gray-300">
          Hi, I’m Asif Ali — a dedicated MERN Stack Developer who loves turning ideas into clean, 
          modern, and high-performing web applications. I specialize in building responsive, 
          user-friendly, and visually appealing websites using React, Node.js, Express, MongoDB, 
          HTML, CSS, and JavaScript.
          I’ve worked on NGO platforms, portfolio websites, and full-stack projects, 
          where I focused on smooth user experiences, 
          clean architecture, and scalable solutions. 
          I believe good design and strong functionality should always go hand in hand.
        </p>
        <p className="text-sm md:text-md mt-4 md:mt-5 leading-relaxed text-gray-300">
          I’m a continuous learner, always exploring new tools and techniques to improve
           performance, UI/UX, and overall product quality. Currently, 
           I’m open to job opportunities, freelance projects, 
           and collaborations where I can add real value and grow as a developer.
           Let’s build something impactful together 🚀
        </p>
        {/* Information Grid with 3D shadow effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm mt-5">
          {[
            { label: "Residence", value: "Karachi, Pakistan" },
            { label: "Education", value: "BS(Hons) Information Technology" },
            { label: "Skills", value: "React.js, JavaScript, HTML, CSS, Tailwind CSS, MongoDB, Express.js, Node.js" },
            { label: "Experience", value: "1 year in Frontend Development" },
            { label: "Hobbies", value: "Coding, Traveling, Art" },
            { label: "Email", value: "asif.ali.deve@gmail.com" },
          ].map((item, index) => (
            <div key={index} className="transition-transform duration-500 transform hover:translate-x-2 hover:-translate-y-2 shadow-lg bg-gradient-to-b from-gray-700 to-purple-800 p-4 rounded-md">
              <p>
                <span className="font-semibold text-blue-200">{item.label}:</span> {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Download Button with 3D hover effect */}
        <div className="mt-6">
          <a href="/Asif Akbar.pdf" download>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center transition-transform transform hover:scale-105 shadow-lg">
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
  );
};

export default About;