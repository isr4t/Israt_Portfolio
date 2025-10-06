import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <a href="/" className="inline-block mb-6">
              <span className="text-pink-500 font-bold text-2xl">
                Israt<span className="text-white">Jahan</span>
              </span>
            </a>
            <p className="mb-4 text-sm">
              Explore my projects, skills, and portfolio showcase—all in one
              place. Discover my work and get in touch!
            </p>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/isr4t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-pink-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/01israt01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-pink-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.786-1.75-1.754s.784-1.754 1.75-1.754 1.75.786 1.75 1.754-.784 1.754-1.75 1.754zm13.5 10.268h-3v-4.5c0-1.072-.021-2.448-1.493-2.448-1.493 0-1.722 1.166-1.722 2.372v4.576h-3v-9h2.881v1.232h.041c.401-.757 1.379-1.553 2.838-1.553 3.034 0 3.597 1.996 3.597 4.59v5.731z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-pink-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-pink-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-pink-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-pink-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-white font-semibold mb-4">Skills</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-pink-500 transition-colors">React</li>
              <li className="hover:text-pink-500 transition-colors">Node.js</li>
              <li className="hover:text-pink-500 transition-colors">
                Tailwind CSS
              </li>
              <li className="hover:text-pink-500 transition-colors">Laravel</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">Email: 07israt07gmail.com</p>

            <p className="text-sm">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Israt Jahan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
