import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B] flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Build. Scale. Launch. <br /> With <span className="text-violet-400">JPForge</span> 🚀
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        Full Stack Engineer & SaaS Builder — turning ideas into polished products, from zero to launch.
      </p>
      <a
        href="#contact"
        className="mt-10 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-lg text-white font-semibold text-lg hover:brightness-110 transition duration-300 shadow-lg"
      >
        Let's Collaborate
      </a>
    </section>
  );
};

export default Hero;
