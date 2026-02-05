import { useEffect, useState } from 'react';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';

const typingSpeed = 90; // Speed of typing effect in milliseconds
const pauseDuration = 2000; // Duration to pause before changing text

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ['Asif Akbar', 'Backend Developer (Node.js)'];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[Math.floor(index / (phrases.length + 1))];
      const newText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);
      setText(newText);

      if (!isDeleting && newText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && newText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % (phrases.length * 2)); // Loop through phrases
      }
    };
    const typingInterval = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(typingInterval);
  }, [text, isDeleting, index]);

  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 
        bg-cover bg-center shadow-2xl"
        style={{
          perspective: '1000px',
          backgroundImage: 'url(re.png)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Left Side: Heading with Typing Effect and Buttons */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 transform transition-transform duration-700">
          <h1
            className="text-4xl font-bold sm:text-3xl md:text-5xl lg:text-8xl
             leading-tight tracking-wider"
            style={{
              color: 'white', // Set the color to white
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8), 4px 4px 6px rgba(255, 255, 255, 0.6)', // Adjust shadow for better visibility
            }}
          >
            I am <br />
            <span
              className="font-extrabold animate-pulse"
              style={{
                color: 'white', // Set the color to white
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 4px 4px 6px rgba(255, 255, 255, 0.6)',
              }}
            >
              {text}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mt-5 mb-6 text-gray-300 leading-relaxed">
            Master the most in-demand technologies and <br /> become a MERN-Stack developer.
          </p>
          <div className="flex justify-center md:justify-start mt-5 space-x-6">
            <button
              className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-2xl"
              style={{ transform: 'perspective(500px) rotateX(10deg)' }}
            >
              Get Started
            </button>
            <button
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-md hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg"
              style={{ transform: 'perspective(500px) rotateX(-10deg)' }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 transform transition-transform duration-500">
          <img
            src="./enhancerImage.png" // Replace with your image source
            alt="Hero"
            className="w-full md:w-96 rounded-full float-right"
            style={{
              transform: 'rotateY(-1deg)',
              boxShadow: '10px 1px 0px rgba(225, 221, 231, 0.76)',
            }}
          />
        </div>
      </div>

      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <WhatsAppButton />
  
    </>
  );
};

export default Home;