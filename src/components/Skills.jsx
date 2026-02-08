import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#888888" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  // Additional backend / soft skills
  { name: "RESTful APIs", icon: null, color: "#A78BFA" },
  { name: "JWT Authentication", icon: null, color: "#F472B6" },
  { name: "Password Security", icon: null, color: "#FBBF24" },
  { name: "MVC Architecture", icon: null, color: "#34D399" },
  { name: "Postman / API Testing", icon: null, color: "#60A5FA" },
  { name: "Git & GitHub", icon: null, color: "#F87171" },
  { name: "Problem Solving", icon: null, color: "#C084FC" },
  { name: "Prompt Engineering", icon: null, color: "#F472B6" },
];

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          } else {
            entry.target.classList.remove("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2
          className="fade-up text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text
            bg-gradient-to-r from-purple-600 to-indigo-600 text-center mb-12"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`fade-up flex flex-col items-center justify-center p-5 rounded-xl
                shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
              style={{
                background: `linear-gradient(145deg, ${skill.color}20, #1a202c 80%)`,
                color: skill.color,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {skill.icon && (
                <div className="text-5xl mb-3 transition-transform transform hover:scale-110">
                  {skill.icon}
                </div>
              )}
              <span className="text-center font-semibold text-sm sm:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s forwards; }
      `}</style>
    </section>
  );
};

export default Skills;