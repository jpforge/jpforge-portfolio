import React from 'react';

const Skills = () => {
  const coreSkills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Angular',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Docker',
    'AWS',
    'Git & GitHub',
    'CI/CD',
    'System Design'
  ];

  return (
    <section id="skills" className="py-24 bg-[#0F172A] text-[#E2E8F0]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">My Tech Stack</h2>
        <p className="text-gray-400 text-lg">Building SaaS products with modern full-stack technologies</p>
      </div>
      <div className="flex justify-center flex-wrap gap-6 max-w-5xl mx-auto">
        {coreSkills.map(skill => (
          <span key={skill} className="px-6 py-3 bg-gradient-to-br from-violet-600 to-violet-500 rounded-xl text-lg font-semibold shadow-md hover:scale-105 transform transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
