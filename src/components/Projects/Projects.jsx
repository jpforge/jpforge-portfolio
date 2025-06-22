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
          <h3 className="text-2xl font-semibold mb-3 text-violet-400">DevFlow AI</h3>
          <p className="text-gray-300 mb-4">A GitHub-integrated, AI-powered workflow copilot that automates code reviews, PR creation, test generation, and deployment workflows.</p>
          <a href="https://devflow-ai-dun.vercel.app/" className="text-violet-300 font-semibold hover:underline">Learn More →</a>
        </div>
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#334155] transition transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-violet-400">StackStart</h3>
          <p className="text-gray-300 mb-4">A full-stack SaaS generator, but specialized for micro-SaaS in trending niches: link-in-bio tools, AI utilities, marketplaces.</p>
          <a href="#" className="text-violet-300 font-semibold hover:underline">Learn More →</a>
        </div>
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl shadow-lg border border-[#334155] transition transform hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-violet-400">AutoOnboard AI</h3>
          <p className="text-gray-300 mb-4">Smart onboarding assistant that handles forms, contracts, intake meetings, and setup checklists via email/chatbot.</p>
          <a href="#" className="text-violet-300 font-semibold hover:underline">Learn More →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
