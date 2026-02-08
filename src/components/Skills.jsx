import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "from-[#E34F26] to-[#F16529]" },
  { name: "CSS", icon: <FaCss3Alt />, color: "from-[#1572B6] to-[#2965F1]" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "from-[#F7DF1E] to-[#FFD700]" },
  { name: "React", icon: <FaReact />, color: "from-[#61DAFB] to-[#0DCAF0]" },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-[#339933] to-[#6CC24A]" },
  { name: "Express.js", icon: <SiExpress />, color: "from-[#888888] to-[#BBBBBB]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-[#4DB33D] to-[#70C24A]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-[#38BDF8] to-[#0EA5E9]" },
  { name: "RESTful APIs", icon: null, color: "from-[#A78BFA] to-[#8B5CF6]" },
  { name: "JWT Authentication", icon: null, color: "from-[#F472B6] to-[#EC4899]" },
  { name: "Password Security", icon: null, color: "from-[#FBBF24] to-[#F59E0B]" },
  { name: "MVC Architecture", icon: null, color: "from-[#34D399] to-[#10B981]" },
  { name: "Postman / API Testing", icon: null, color: "from-[#60A5FA] to-[#3B82F6]" },
  { name: "Git & GitHub", icon: null, color: "from-[#F87171] to-[#EF4444]" },
  { name: "Problem Solving", icon: null, color: "from-[#C084FC] to-[#A855F7]" },
  { name: "Prompt Engineering", icon: null, color: "from-[#F472B6] to-[#EC4899]" },
];

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fadeInUp");
          else entry.target.classList.remove("animate-fadeInUp");
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
      className="relative py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="fade-up text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-purple-600 to-indigo-600 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`fade-up relative flex flex-col items-center justify-center p-6 rounded-2xl
                shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:scale-105 overflow-hidden`}
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Gradient + Frosted Glass */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl opacity-80 backdrop-blur-md pointer-events-none`}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-white">
                {skill.icon && (
                  <div className="text-5xl mb-3 transition-transform transform hover:scale-110">
                    {skill.icon}
                  </div>
                )}
                <span className="text-center font-semibold text-sm sm:text-base">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
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
