import { useEffect } from 'react';

const services = [
  {
    title: 'Web Design',
    description: 'Professional and modern web design services.',
    icon: '🌐',
  },
  {
    title: 'Full Stack Development',
    description: 'Developing robust full-stack applications using the MERN stack.',
    icon: '💻',
  },
  {
    title: 'MongoDB Development',
    description: 'Creating efficient databases with MongoDB for scalable applications.',
    icon: '🗄️',
  },
  {
    title: 'Express.js API Development',
    description: 'Building powerful and flexible APIs using Express.js.',
    icon: '⚙️',
  },
  {
    title: 'React.js Frontend',
    description: 'Building dynamic, fast, and responsive frontends using React.js.',
    icon: '🔄',
  },
  {
    title: 'Node.js Backend',
    description: 'High-performance server-side development with Node.js.',
    icon: '🔧',
  },
  {
    title: 'Secure Authentication',
    description: 'Implementing secure authentication with JWT and OAuth.',
    icon: '🔒',
  },
  {
    title: 'Clean Code',
    description: 'Delivering clean, maintainable, and scalable code.',
    icon: '📝',
  },
  {
    title: 'Tailwind CSS & Material UI',
    description: 'Using Tailwind CSS and Material UI for stylish, responsive designs.',
    icon: '🎨',
  },
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
    <section id="services" className="services-section py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="services-title fade-up text-3xl font-bold text-center mb-8">My Services</h2>
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card zoom-in p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="service-icon text-4xl text-blue-600">{service.icon}</div>
              <h3 className="service-title text-xl font-semibold mt-2">{service.title}</h3>
              <p className="service-description mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;