import { useEffect } from 'react'; 

const services = [
  { title: 'Web Design', description: 'Professional and modern web design services.', icon: '🌐' },
  { title: 'Full Stack Development', description: 'Developing robust full-stack applications using the MERN stack.', icon: '💻' },
  { title: 'MongoDB Development', description: 'Creating efficient databases with MongoDB for scalable applications.', icon: '🗄️' },
  { title: 'Express.js API Development', description: 'Building powerful and flexible APIs using Express.js.', icon: '⚙️' },
  { title: 'React.js Frontend', description: 'Building dynamic, fast, and responsive frontends using React.js.', icon: '🔄' },
  { title: 'Node.js Backend', description: 'High-performance server-side development with Node.js.', icon: '🔧' },
  { title: 'Secure Authentication', description: 'Implementing secure authentication with JWT and OAuth.', icon: '🔒' },
  { title: 'Clean Code', description: 'Delivering clean, maintainable, and scalable code.', icon: '📝' },
  { title: 'Tailwind CSS & Material UI', description: 'Using Tailwind CSS and Material UI for stylish, responsive designs.', icon: '🎨' },
];

const Services = () => {
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

  return (
    <section 
      id="services" 
      className="services-section py-10 text-white relative overflow-hidden"
      style={{
        backgroundImage: 'url(other.png)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay', // Blends with gradient
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-gray-900 opacity-80"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          className="services-title fade-up text-center mb-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide text-shadow-lg" 
          style={{ textShadow: '2px 2px 8px rgba(128, 0, 128, 0.6)' }} // Purple shadow
        >
          My Services
        </h2>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card zoom-in p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white overlay
                backdropFilter: 'blur(10px)', // Frosted glass effect
                border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
                animationDelay: `${index * 0.2}s`,
                boxShadow: '0 4px 30px rgba(128, 0, 128, 0.5)', // Purple shadow for the card
              }}
              aria-label={`Service: ${service.title}`}
            >
              <div className="service-icon text-5xl mb-4 text-indigo-200 transition-transform transform hover:scale-110">
                {service.icon}
              </div>
              <h3 className="service-title text-2xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="service-description text-base text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;