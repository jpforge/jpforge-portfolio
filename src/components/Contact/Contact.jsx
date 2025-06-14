import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0C4A6E] text-[#F1F5F9] font-sans">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Let’s Connect</h2>
        <p className="text-gray-300 text-lg">Building something? Let’s make it real together.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:flex md:space-x-16">
        {/* Left Side - Founder CTA */}
        <div className="md:w-5/12 mb-12 md:mb-0 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 leading-snug">
            🚀 SaaS Founder & Full Stack Developer <br />
            <span className="text-violet-400">Let’s Build, Scale & Ship</span>
          </h3>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Whether you're launching a new SaaS product, refining an MVP, or need full-stack consulting — I bring end-to-end product engineering expertise.
          </p>
          <ul className="space-y-4 text-lg mt-6">
            <li>📧 <a href="mailto:jpforge.dev@example.com" className="hover:text-[#8B5CF6]">jpforge.dev@example.com</a></li>
            <li>💻 <a href="https://github.com/jpforge" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B5CF6]">GitHub</a></li>
            <li>🔗 <a href="https://linkedin.com/in/jpforge" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B5CF6]">LinkedIn</a></li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-7/12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#0F172A] p-10 rounded-xl shadow-lg border border-[#1E293B] transition-transform duration-300">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-semibold">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-[#1E293B] border border-[#334155] text-[#F1F5F9] placeholder-gray-400 text-base focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-[#1E293B] border border-[#334155] text-[#F1F5F9] placeholder-gray-400 text-base focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 rounded-lg bg-[#1E293B] border border-[#334155] text-[#F1F5F9] placeholder-gray-400 text-base focus:ring-2 focus:ring-[#8B5CF6] focus:outline-none"
                  placeholder="Tell me a bit about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:brightness-110 text-white rounded-lg font-semibold text-lg transition duration-300"
              >
                Let’s Get Started
              </button>
            </form>
          ) : (
            <div className="text-center text-xl font-semibold text-green-400">
              ✅ Thanks for reaching out — I’ll be in touch!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
