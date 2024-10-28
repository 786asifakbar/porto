import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#A83232" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#3B82F6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#FACC15" },
  { name: "React", icon: <FaReact />, color: "#60A5FA" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#4ADE80" },
  { name: "Express", icon: <SiExpress />, color: "#94A3B8" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#10B981" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
];

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          } else {
            entry.target.classList.remove('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="skills-section py-10 text-white shadow-2xl rounded-lg transform transition-transform hover:scale-105 relative overflow-hidden"
      style={{
        backgroundImage: 'url(other.png)', // Replace with the path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay', // Blend the image with the gradient
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-90"></div>

      <div className="container mx-auto relative z-10">
        <h2
          className="skills-title text-center mb-8 fade-up tracking-wide text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-shadow-lg"
          style={{ textShadow: '2px 2px 6px rgba(128, 0, 128, 0.6)' }} // Purple shadow
        >
          Skills
        </h2>

        <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card fade-up p-5 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:translate-y-2 hover:-rotate-2 flex flex-col items-center"
              style={{
                animationDelay: `${index * 0.2}s`,
                color: skill.color,
                background: `linear-gradient(145deg, ${skill.color}20, #1a202c 80%)`,
                boxShadow: '0 4px 30px rgba(128, 0, 128, 0.5)', // Purple shadow effect
              }}
            >
              <div className="skill-icon text-5xl mb-3 transition-transform transform hover:scale-110">
                {skill.icon}
              </div>
              <span className="skill-name text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;