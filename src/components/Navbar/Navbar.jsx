import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0F172A]/80 backdrop-blur-md text-white p-4 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Tag */}
        <div className="flex flex-col">
        <div className="text-2xl font-extrabold tracking-wide text-[#F1F5F9] font-sans">
        JP<span className="text-[#8B5CF6]">Forge</span>
        </div>
        <div className="text-xs text-gray-400 mt-1 hidden md:block font-sans">
        Code. Build. Forge your ideas.
        </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[#F1F5F9] font-medium">
          <a href="#projects" className="hover:text-[#8B5CF6] transition">Projects</a>
          <a href="#skills" className="hover:text-[#8B5CF6] transition">Skills</a>
          <a href="#contact" className="hover:text-[#8B5CF6] transition">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="md:hidden flex flex-col space-y-4 p-4 bg-[#0F172A]/90 backdrop-blur-sm rounded-b-md shadow-md">
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#8B5CF6] transition">Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#8B5CF6] transition">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#8B5CF6] transition">Contact</a>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
