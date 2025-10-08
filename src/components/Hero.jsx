import React from "react";
import HeroImg from '../assets/heroimg.png'

const HeroSection = () => {
  return (
    <div id="hero" className="relative w-full h-screen bg-neutral-900 flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
        
        {/* Left: Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Israt Jahan
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
            React.js developer with PHP & Laravel experience, building dynamic and responsive web applications with clean, efficient code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1FMjQEFV2ASxVW2keakYSe3G2itpjezci/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a1 1 0 00-1 1v16a1 1 0 102 0V3a1 1 0 00-1-1z" />
                <path d="M5 12a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" />
              </svg>
              View Resume
            </a>

            {/* Projects Button */}
            <a
              href="#projects"
              className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
              My Projects
            </a>
          </div>
        </div>

        {/* Right: Profile Photo */}
        <div className="mb-6 md:mb-0 flex justify-center md:justify-end">
          <img
            src={HeroImg} 
            alt="Israt Jahan"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full border-4 border-pink-500 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
