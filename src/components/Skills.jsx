import { useEffect } from "react";

const skills = [
  { name: "HTML", icon: "🌐", color: "#E44D26" },
  { name: "CSS", icon: "🎨", color: "#1572B6" },
  { name: "JavaScript", icon: "⚙️", color: "#F7DF1E" },
  { name: "React", icon: "🔄", color: "#61DAFB" },
  { name: "Node.js", icon: "🌿", color: "#339933" },
  { name: "Express", icon: "⚙️", color: "#333333" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Tailwind CSS", icon: "💨", color: "#38B2AC" },
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
    <section id="skills" className="skills-section py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="skills-title text-3xl font-bold text-center mb-8 fade-up">Skills</h2>
        <div className="skills-grid grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card fade-up p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.2}s`, color: skill.color }}
              aria-label={`Skill: ${skill.name}`}
              role="article"
            >
              <div className="skill-icon text-4xl mb-2">{skill.icon}</div>
              <span className="skill-name text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;