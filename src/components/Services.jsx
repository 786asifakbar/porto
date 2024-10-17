import { useEffect } from 'react';
import './Services.css'; // Import custom CSS for styling

const services = [
  {
    title: 'Web Design',
    description: 'Professional and modern web design services.',
    icon: '🌐',
  },
  {
    title: 'Full Stack Development',
    description: 'Developing robust full-stack applications using MERN stack.',
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
    description: 'Delivering clean, maintainable, and scalable code.',
    icon: '🎨',
  },
];

const Services = () => {
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

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title fade-up">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card zoom-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;