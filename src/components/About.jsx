import React from "react";

const About = () => {
  const skills = ["React", "Node.js", "Tailwind CSS", "PHP/Laravel"];

  return (
    <section id="about" className="bg-neutral-800 py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-neutral-300 text-lg mb-6">
        "Passionate Web Developer with experience in React.js, PHP, Laravel, and modern frontend frameworks. I love crafting interactive, user-friendly web experiences."
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {skills.map((skill, index) => (
            <span key={index} className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
