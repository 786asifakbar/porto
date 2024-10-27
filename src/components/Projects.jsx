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
      title: 'My Portfolio',
      description: 'A cool project that I worked on using React and Tailwindcss.',
      languages: ['React', 'Tailwindcss'],
      link: 'https://porto-mu-peach.vercel.app/', // Replace with actual project link
      image: 'blue.png', // Replace with actual image URL
    },
    {
      title: 'Help Human Right Orginization',
      description: 'Another awesome project with amazing features.',
      languages: ['React Js', 'Tailwindcss'],
      link: 'https://project-wine-omega-21.vercel.app/',
      image: 'hero.png',
    },
    {
      title: 'NexousTech',
      description: 'A web application built with HTML, CSS, and JavaScript.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://software-kappa-two.vercel.app/',
      image: './hero.png',
    },
    {
      title: 'Project Four',
      description: 'A full-stack MERN project with a modern UI.',
      languages: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: '#',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Project Five',
      description: 'An e-commerce website with payment integration.',
      languages: ['React', 'Node.js', 'Stripe API'],
      link: '#',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      title: 'Project Six',
      description: 'A mobile-friendly web app with custom animations.',
      languages: ['React', 'Tailwind CSS'],
      link: '#',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <section 
      id="projects" 
      className="projects-section py-10 bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 
          className="title fade-up text-4xl font-bold text-center mb-10 tracking-wide" 
          style={{ textShadow: '2px 2px 8px rgba(128, 0, 128, 0.6)' }} // Purple shadow
        >
          Portfolio
        </h2>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card zoom-in bg-white text-black p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center" // Added flex and items-center for centering
              style={{
                animationDelay: `${index * 0.2}s`,
                background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent overlay
                backdropFilter: 'blur(10px)', // Frosted glass effect
                border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
                boxShadow: '0 4px 30px rgba(128, 0, 128, 0.5)', // Purple shadow
              }}
            >
              <div className="project-image mb-4">
                <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover rounded-md" />
              </div>
              <h3 className="project-title text-2xl font-semibold mb-2 text-gray-100 text-center">{project.title}</h3> {/* Centered text */}
              <p className="project-description mt-2 text-gray-300 text-center">{project.description}</p> {/* Centered text */}
              <div className="project-languages mt-4 text-center"> {/* Centered content */}
                <h4 className="languages-title font-medium text-indigo-400">Technologies:</h4> {/* Label above technologies */}
                <div className="flex justify-center space-x-2 mt-1"> {/* Flex container for inline display */}
                  {project.languages.map((language, langIndex) => (
                    <span key={langIndex} className="text-gray-300">{language}</span> // Individual language display
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-6 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
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