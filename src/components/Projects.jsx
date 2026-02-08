import { useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Projects = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fadeInUp');
          else entry.target.classList.remove('animate-fadeInUp');
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
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
      title: 'Help Human Rights Organization',
      description: 'NGO platform with user-friendly features.',
      languages: ['React', 'Tailwind CSS'],
      link: 'https://project-wine-omega-21.vercel.app/',
      image: 'help.jpg',
      color: 'from-green-400 to-blue-500',
    },
    {
      title: 'NexousTech',
      description: 'Responsive web app built with HTML, CSS & JavaScript.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://software-kappa-two.vercel.app/',
      image: 'nex.PNG',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <>
      <section id="projects" className="relative py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="fade-up text-4xl md:text-5xl font-extrabold text-center
            text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-16">
            Portfolio
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="fade-up relative rounded-3xl overflow-hidden transform transition duration-500 hover:-translate-y-4 hover:scale-105 shadow-2xl"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Gradient + Frosted Glass */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl opacity-80 backdrop-blur-md pointer-events-none`}></div>

                {/* Image */}
                <div className="relative z-10">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-52 object-cover rounded-t-3xl shadow-lg transition-transform duration-500 hover:scale-110"
                  />

                  {/* Content */}
                  <div className="p-6 text-white text-center flex flex-col items-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg">{project.title}</h3>
                    <p className="text-sm md:text-base mb-4 drop-shadow-md max-w-xs">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm shadow hover:bg-white/30 transition"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-black px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-white/90 hover:scale-105 transition transform"
                      aria-label={`View project: ${project.title}`}
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Glowing border */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none shadow-inner"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />

      {/* Fade-in animation */}
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