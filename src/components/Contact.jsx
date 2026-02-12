import { useEffect, useState } from "react";
import axios from "axios";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // Scroll Animation
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50)
          el.classList.add("animate-fadeInUp");
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();

    return () =>
      window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/users`,
  formData
);

      



      setResponseMsg(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMsg(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 relative overflow-hidden bg-gray-900 text-white"
        style={{
          backgroundImage: "url(other.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 opacity-80"></div>

        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center min-h-screen gap-12 relative z-10">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-10 animate-on-scroll">
            <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl shadow-2xl hover:shadow-purple-700 transition duration-300 transform hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Get in Touch
              </h3>
              <p><strong>Phone:</strong> (+92) 315-393-3660</p>
              <p><strong>Email:</strong> asif.ali.deve@gmail.com</p>
              <p><strong>Address:</strong> Gorakh Line Near PNS Shifa Hospital, Karachi</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full lg:w-1/2 animate-on-scroll">
            <h2 className="text-5xl text-center mb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Contact Me
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg mx-auto space-y-6 bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-2xl"
            >
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {responseMsg && (
                <p className="text-center mt-4 text-green-400">
                  {responseMsg}
                </p>
              )}
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