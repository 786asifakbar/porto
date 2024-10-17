import { useEffect } from 'react';
import './Projects.css'; // Import the custom CSS file

const Projects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up, .zoom-in');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
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

  const projects = [
    {
      title: 'Project One',
      description: 'A cool project that I worked on using React and CSS.',
      languages: ['React', 'CSS'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Another awesome project with amazing features.',
      languages: ['JavaScript', 'Node.js'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Another awesome project with amazing features.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="title fade-up">Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card zoom-in">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-languages">
                <h4 className="languages-title">Technologies:</h4>
                <ul>
                  {project.languages.map((language, langIndex) => (
                    <li key={langIndex}>{language}</li>
                  ))}
                </ul>
              </div>
              <a href={project.link} className="btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
