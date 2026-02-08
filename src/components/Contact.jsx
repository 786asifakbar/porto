import { useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Contact = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) el.classList.add('animate-fadeInUp');
      });
    };
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <>
      <section
        id="contact"
        className="py-16 relative overflow-hidden bg-gray-900 text-white"
        style={{
          backgroundImage: 'url(other.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 opacity-80"></div>

        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center min-h-screen gap-12 relative z-10">
          {/* Contact Info + Map */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-10 animate-on-scroll">
            <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-2xl hover:shadow-purple-700 transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-lg">
                Get in Touch
              </h3>
              <p className="mb-3 text-base md:text-lg">
                <strong>Phone:</strong> (+92) 315-393-3660
              </p>
              <p className="mb-3 text-base md:text-lg">
                <strong>Email:</strong> asif.ali.deve@gmail.com
              </p>
              <p className="mb-3 text-base md:text-lg">
                <strong>Address:</strong> Gorakh Line Near PNS Shifa Hospital, Karachi
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-700 transform transition hover:scale-105">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0567626221214!2d67.06078377460341!3d24.896045377906063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f74156c5323%3A0x257f1b15998551b7!2sHelp%20Human%20Rights%20Organization%20Of%20Pakistan!5e0!3m2!1sen!2s!4v1730112820062!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 animate-on-scroll">
            <h2 className="text-5xl md:text-5xl text-center mb-10 font-extrabold
              text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-lg">
              Contact Me
            </h2>

            <form className="w-full max-w-lg mx-auto space-y-6 bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-2xl hover:shadow-purple-700 transition-shadow duration-300 transform hover:scale-105">
              <div>
                <label className="block mb-2 text-sm md:text-base font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm md:text-base font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm md:text-base font-medium">Message</label>
                <textarea
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
                  rows="5"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <WhatsAppButton />

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

export default Contact;