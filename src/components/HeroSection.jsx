import Typical from 'react-typical';

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between mt-10 p-8 md:p-16 
        bg-gradient-to-r from-gray-900 to-blue-900 animate-zoomOut"
      >
        {/* Left Side: Heading with Typing Effect and Buttons */}
        <div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fadeRight"
        >
          <h1 className="text-5xl font-bold text-white sm:text-3xl md:text-5xl lg:text-8xl">
            I am <br />{' '}
            <Typical
              steps={['Asif Akbar', 5000, 'MERN_Stack Developer', 10000]}
              loop={Infinity}
              wrapper="span"
              className="text-blue-600"
            />
          </h1>
          <p className="text-2xl mt-5 mb-6 text-white">
            Master the most in-demand technologies and <br />become a MERN-Stack developer.
          </p>
          <div className="flex justify-center md:justify-start mt-5 space-x-4">
            <button 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
            <button 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div 
          className="md:w-1/2 animate-fadeLeft"
        >
          {/* Main Image */}
          <img
            src="/enhancerImage.png" // Replace with your image source
            alt="Hero"
            className="w-96 float-end p-0 rounded-s-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;