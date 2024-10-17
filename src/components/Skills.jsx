import { useEffect } from "react";
import './Skills.css'; // Importing external CSS

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
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          } else {
            entry.target.classList.remove('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title fade-up">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;