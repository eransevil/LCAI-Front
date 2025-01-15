import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, resetState } from "../redux/emailSlice";

const Home = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.email);

  const handleSendEmail = () => {
    dispatch(sendEmail({ email, subject, message }));
  };

  const handleReset = () => {
    dispatch(resetState());
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 sm:px-16 lg:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
            opacity: 0.9,
            zIndex: 0,
          }}
        ></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <img
            src="/logo.png"
            alt="logo"
            height={100}
            width={180}
            className="mx-auto mb-6"
          />
          <p className="mt-4 text-2xl sm:text-3xl font-bold text-white shadow-lg">
            Harnessing the power of Ai to revolutionize the way we measure
            environmental impact
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">About LCAI</h2>
          <p className="mt-4 text-lg text-gray-600">
            LCAI leverages cutting-edge artificial intelligence technology to
            help businesses and individuals optimize energy consumption,
            minimize waste, and contribute to a greener planet. We believe AI
            can make the world more sustainable, and we're here to lead the way.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-700 text-white py-16 px-6 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="mt-4 text-xl">
            Together, we can create a world where AI drives energy efficiency,
            reduces waste, and protects our planet.
          </p>
        </div>
      </section>

      {/* Contact Section - Now Full Width */}
      <div className="w-full bg-gray-50">
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Send Us an Email
          </h2>

          {success ? (
            <div className="w-full space-y-6 flex flex-col items-center justify-center py-8">
              <div className="text-green-600 text-center">
                <svg
                  className="w-16 h-16 mb-4 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold mb-2">
                  Email Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition"
                >
                  Send Another Email
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />

              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full p-3 rounded-lg border border-gray-300 h-32 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />

              <button
                onClick={handleSendEmail}
                disabled={loading}
                className={`w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Email"}
              </button>

              {error && (
                <p className="text-red-600 font-medium text-center">{error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
