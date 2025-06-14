import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#1E1B4B] text-[#F8FAFC]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Founder Projects 🚀</h2>
        <p className="text-gray-400 text-lg">A few products I'm actively building & scaling</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#334155] transition transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-violet-400">SaaSForge</h3>
          <p className="text-gray-300 mb-4">A SaaS boilerplate platform to help founders launch full-stack SaaS faster using modern stack & best practices.</p>
          <a href="#" className="text-violet-300 font-semibold hover:underline">Learn More →</a>
        </div>
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#334155] transition transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-violet-400">CodeAudit AI</h3>
          <p className="text-gray-300 mb-4">AI-powered code review tool that helps developers optimize code quality, security, and performance automatically.</p>
          <a href="#" className="text-violet-300 font-semibold hover:underline">Learn More →</a>
        </div>
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#334155] transition transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-violet-400">GrowthDesk</h3>
          <p className="text-gray-300 mb-4">A simple CRM + client onboarding solution designed for freelancers, agencies & indie makers to scale client work easily.</p>
          <a href="#" className="text-violet-300 font-semibold hover:underline">Learn More →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
