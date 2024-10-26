import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#333333" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
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
    <section id="skills" className="skills-section py-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white shadow-2xl rounded-lg transform transition-transform hover:scale-105">
      <div className="container mx-auto">
        <h2 className="skills-title text-5xl font-bold text-center mb-8 fade-up tracking-wide" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)' }}>Skills</h2>
        
        <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card fade-up p-5 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:translate-y-2 hover:-rotate-2"
              style={{
                animationDelay: `${index * 0.2}s`,
                color: skill.color,
                background: `linear-gradient(145deg, ${skill.color} 20%, #1a202c 80%)`,
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