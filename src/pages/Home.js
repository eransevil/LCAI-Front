import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-300 text-white py-24 px-6 sm:px-16 lg:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            opacity: 0.1,
            zIndex: 200,
          }}
        ></div>
        <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-r from-green-500 to-teal-500"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
            Harnessing AI to Create a Sustainable Future
          </h1>
          <p className="mt-4 text-xl text-white sm:text-2xl">
            At LCAI, we use artificial intelligence to optimize energy usage,
            reduce waste, and protect our planet.
          </p>
          <div className="mt-8">
            <a
              href="#about"
              className="inline-block bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition"
            >
              Learn More
            </a>
          </div>
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
            can make the world more sustainable, and we’re here to lead the way.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-16">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center">
            How We Help
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-green-700">
                AI-Powered Optimization
              </h3>
              <p className="mt-4 text-gray-600">
                We analyze data and predict energy needs with AI to optimize
                consumption and reduce waste.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-green-700">
                Sustainable Practices
              </h3>
              <p className="mt-4 text-gray-600">
                We integrate AI-driven solutions that help businesses and
                individuals adopt more energy-efficient practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-green-700">
                Carbon Footprint Reduction
              </h3>
              <p className="mt-4 text-gray-600">
                Our AI models analyze patterns to help reduce carbon emissions
                and ensure a greener future for all.
              </p>
            </div>
          </div>
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
          {/* <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-800 transition"
            >
              Get In Touch
            </a>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or want to learn more about how LCAI can help you?
            Get in touch with us today.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@lcai.com"
              className="inline-block bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
