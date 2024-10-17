import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up, .zoom-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
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

  const projects = [
    {
      title: 'Project One',
      description: 'A cool project that I worked on using React and CSS.',
      languages: ['React', 'CSS'],
      link: '#', // Replace with the actual project link
    },
    {
      title: 'Project Two',
      description: 'Another awesome project with amazing features.',
      languages: ['JavaScript', 'Node.js'],
      link: '#', // Replace with the actual project link
    },
    {
      title: 'Project Three',
      description: 'A web application built with HTML, CSS, and JavaScript.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      link: '#', // Replace with the actual project link
    },
  ];

  return (
    <section id="projects" className="projects-section py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="title fade-up text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card zoom-in p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="project-title text-xl font-semibold">{project.title}</h3>
              <p className="project-description mt-2">{project.description}</p>
              <div className="project-languages mt-4">
                <h4 className="languages-title font-medium">Technologies:</h4>
                <ul className="list-disc list-inside">
                  {project.languages.map((language, langIndex) => (
                    <li key={langIndex}>{language}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                className="btn mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                aria-label={`View project: ${project.title}`}
              >
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