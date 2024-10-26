import About from './About';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Typical from 'react-typical';

const HeroSection = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 
        bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl"
        style={{ perspective: '1000px' }}
      >
        {/* Left Side: Heading with Typing Effect and Buttons */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 transform transition-transform duration-700 hover:rotate-y-6">
          <h1
            className="text-5xl font-bold sm:text-3xl md:text-5xl lg:text-8xl leading-tight tracking-wider text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(to right, #30cfd0, #330867)',
              textShadow: '2px 2px 0 #f39c12, 4px 4px 0 #e74c3c, 6px 6px 0 #8e44ad',
            }}
          >
            I am <br />
            <Typical
              steps={['Asif Akbar', 5000, 'MERN_Stack Developer', 10000]}
              loop={Infinity}
              wrapper="span"
              className="text-transparent bg-clip-text font-extrabold"
              style={{
                backgroundImage: 'linear-gradient(to right, #30cfd0, #330867)',
                textShadow: '2px 2px 0 #f39c12, 4px 4px 0 #e74c3c, 6px 6px 0 #8e44ad',
              }}
            />
          </h1>
          <p className="text-xl md:text-2xl mt-5 mb-6 text-gray-300 leading-relaxed shadow-md">
            Master the most in-demand technologies and <br /> become a MERN-Stack developer.
          </p>
          <div className="flex justify-center md:justify-start mt-5 space-x-6">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-2xl"
              style={{ transform: 'perspective(500px) rotateX(10deg)' }}
            >
              Get Started
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg"
              style={{ transform: 'perspective(500px) rotateX(-10deg)' }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 transform transition-transform duration-500 hover:rotate-y-6 hover:scale-105">
          <img
            src="/enhancerImage.png" // Replace with your image source
            alt="Hero"
            className="w-full md:w-96 rounded-md shadow-2xl"
            style={{ transform: 'rotateY(-15deg)', boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.4)' }}
          />
        </div>
      </div>

      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};
export default HeroSection;