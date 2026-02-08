const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Building modern web applications
            <br /> with clean & scalable code
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Asif Ali</span>,
            a <span className="font-semibold">MERN Stack Developer</span> focused on building
            scalable, high-performance web applications. I enjoy solving real-world
            problems using clean architecture, modern UI, and efficient backend systems.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I’ve worked on NGO platforms, portfolio websites, and full-stack projects,
            delivering responsive user experiences and maintainable codebases.
            I value clarity, performance, and long-term scalability.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Asif Akbar.pdf"
              download
              className="inline-flex items-center justify-center
              bg-purple-600 hover:bg-purple-700 text-white
              px-6 py-3 rounded-md font-semibold transition shadow-lg"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center
              border border-purple-600 text-purple-600
              hover:bg-purple-600 hover:text-white
              px-6 py-3 rounded-md font-semibold transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>

        {/* RIGHT METRICS */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "Experience", value: "1+ Year" },
            { label: "Tech Stack", value: "MERN" },
            { label: "Focus", value: "Clean Code" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-xl p-6 text-center
              hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;