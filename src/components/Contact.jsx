import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          element.classList.add('animate-fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-l from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-screen space-y-12 lg:space-y-0 lg:space-x-12">
        
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start mb-8 lg:mb-0 animate-on-scroll space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Gorikh%20Line%20Near%20PNS%20Shifa%20Hospital%20Karachi&key=YOUR_API_KEY"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-purple-500 transform transition-transform hover:scale-105"
              title="Google Map Location"
            />
          </div>
          <div className="text-center lg:text-left space-y-2 p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-3xl md:text-5xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2 text-sm md:text-base"><strong>Phone:</strong> (+92) 315-393-3660</p>
            <p className="mb-2 text-sm md:text-base"><strong>Email:</strong> asifakbar@meacademy.pk</p>
            <p className="mb-2 text-sm md:text-base"><strong>Address:</strong> Gorakh Line Near PNS Shifa Hospital Karachi.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-wider shadow-lg" style={{ textShadow: '2px 2px 12px rgba(128, 0, 128, 0.8)' }}>
            Contact Me
          </h2>
          <form className="w-full max-w-lg mx-auto space-y-6 bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div>
              <label className="block mb-2 text-sm md:text-base">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm md:text-base">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm md:text-base">Message</label>
              <textarea
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
                rows="5"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;