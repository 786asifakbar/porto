import { useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Projects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fadeInUp');
          else entry.target.classList.remove('animate-fadeInUp');
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'My Portfolio',
      description: 'A modern portfolio built using React and Tailwind CSS.',
      languages: ['React', 'Tailwind CSS'],
      link: 'https://porto-mu-peach.vercel.app/',
      image: 'blue.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Help Human Right Organization',
      description: 'NGO platform with user-friendly features.',
      languages: ['React Js', 'Tailwind CSS'],
      link: 'https://project-wine-omega-21.vercel.app/',
      image: 'help.jpg',
      color: 'from-green-400 to-blue-500',
    },
    {
      title: 'NexousTech',
      description: 'Responsive web app built with HTML, CSS & JS.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://software-kappa-two.vercel.app/',
      image: 'nex.PNG',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="projects-section py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Heading */}
          <h2 className="fade-up text-4xl md:text-5xl font-extrabold text-center mb-12
            text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 drop-shadow-lg">
            Portfolio
          </h2>

          {/* Project Cards Grid */}
          <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`fade-up relative p-6 rounded-2xl shadow-2xl
                  bg-gradient-to-br ${project.color} text-white
                  transform transition duration-300 hover:-translate-y-3 hover:scale-105 overflow-hidden`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Image */}
                <div className="project-image mb-4 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="relative z-10">
                  <h3 className="project-title text-2xl font-bold mb-2 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="project-description text-white/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium 
                          bg-white/20 text-white backdrop-blur-sm shadow hover:bg-white/30 transition"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-white/90 hover:scale-105 transition transform"
                    aria-label={`View project: ${project.title}`}
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />

      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s forwards; }
      `}</style>
    </>
  );
};

export default Projects;
