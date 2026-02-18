import { useEffect, useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsAppButton";

const roles = [
  "MERN Stack Developer",
  "Backend Developer (Node.js)",
  "React Frontend Developer",
];

const typingSpeed = 80;
const pauseDuration = 1800;

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center 
        bg-cover bg-center"
        style={{ backgroundImage: "url(re.png)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 
          grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <p className="text-purple-400 font-semibold tracking-wide mb-3">
              Hi, I’m
            </p>

            <h1 className="text-white font-extrabold 
              text-4xl sm:text-5xl md:text-6xl leading-tight">
              Asif Akbar
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl text-gray-300 h-8">
              <span className="text-purple-400 font-semibold">
                {text}
              </span>
              <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl leading-relaxed">
              I build scalable, secure, and high-performance web applications
              using modern technologies like React, Node.js, Express, and MongoDB.
              Passionate about clean code and real-world solutions.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 
              justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-purple-600 hover:bg-purple-700
                text-white px-8 py-3 rounded-md font-semibold
                transition shadow-lg text-center"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-purple-500 text-purple-400
                hover:bg-purple-600 hover:text-white
                px-8 py-3 rounded-md font-semibold
                transition shadow-lg text-center"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="./enhancerImage.png"
              alt="Asif Akbar"
              className="w-64 sm:w-72 md:w-96 rounded-2xl
              shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      
    </>
  );
};

export default Home;
