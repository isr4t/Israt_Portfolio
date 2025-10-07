import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "M.Sc. in Computer Science & Engineering",
      school: "The People’s University of Bangladesh",
      year: "2023",
    },
    {
      degree: "B.Sc. in Computer Science & Engineering",
      school: "The People’s University of Bangladesh",
      year: "2021",
    },
    {
      degree: "Diploma in Electronics Engineering",
      school: "Dhaka Mohila Polytechnic Institute",
      year: "2013",
    },
  ];

  return (
    <div id="education" className="relative w-full bg-neutral-900 py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Education
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-500 h-full"></div>

        <div className="space-y-16">
          {educationData.map((edu, index) => {
            // Alternate: first left, second right, third left
            const isRight = index === 1;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  isRight ? "md:flex-row-reverse" : "md:flex-row"
                } items-center`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center z-10 text-white">
                  <FaGraduationCap size={18} />
                </div>

                {/* Card */}
                <div className="bg-neutral-800 hover:bg-neutral-800/90 transition-all p-6 rounded-2xl border border-neutral-700 shadow-lg md:w-1/2 md:px-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-pink-500 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base">{edu.school}</p>
                  <span className="text-neutral-400 text-sm mt-2 block">{edu.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
