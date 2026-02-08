import { useEffect } from 'react';

const services = [
  { title: 'Web Design', description: 'Professional and modern web design services.', color: 'from-purple-400 to-indigo-500', icon: '🌐' },
  { title: 'Full Stack Development', description: 'Robust full-stack applications using MERN.', color: 'from-green-400 to-teal-500', icon: '💻' },
  { title: 'MongoDB Development', description: 'Efficient databases for scalable apps.', color: 'from-yellow-400 to-orange-500', icon: '🗄️' },
  { title: 'Express.js API Development', description: 'Flexible APIs built with Express.js.', color: 'from-pink-400 to-red-500', icon: '⚙️' },
  { title: 'React.js Frontend', description: 'Dynamic, fast, responsive frontends.', color: 'from-blue-400 to-cyan-500', icon: '🔄' },
  { title: 'Node.js Backend', description: 'High-performance server-side development.', color: 'from-lime-400 to-green-500', icon: '🔧' },
  { title: 'Secure Authentication', description: 'JWT & OAuth based secure auth.', color: 'from-purple-400 to-pink-500', icon: '🔒' },
  { title: 'Clean Code', description: 'Delivering maintainable, scalable code.', color: 'from-indigo-400 to-purple-500', icon: '📝' },
  { title: 'Tailwind CSS & Material UI', description: 'Stylish responsive designs with modern frameworks.', color: 'from-pink-400 to-red-500', icon: '🎨' },
];

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) entry.target.classList.add('animate-fadeInUp');
          else entry.target.classList.remove('animate-fadeInUp');
        });
      }, { threshold: 0.1 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="fade-up text-4xl md:text-5xl font-extrabold text-center
          text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`fade-up p-6 rounded-2xl shadow-xl
                transform transition duration-300 hover:-translate-y-3 hover:scale-105
                relative overflow-hidden`}
              style={{
                background: `linear-gradient(135deg, ${service.color})`,
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/25 rounded-2xl pointer-events-none"></div>

              <div className="relative text-white">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{service.title}</h3>
                <p className="text-base leading-relaxed drop-shadow-md">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s forwards; }
      `}</style>
    </section>
  );
};

export default Services;