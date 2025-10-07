import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Project1 from "../assets/dashboard.png";
import Project2 from "../assets/frwshify.png";
import Project3 from "../assets/Movie.png";
import Project4 from "../assets/to-do.png";
import Project5 from "../assets/project5.png";


const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Admin-Dashboard",
      image: Project1,
      description:
      "Responsive React & Tailwind admin dashboard with charts, user management, and real-time data visualization.",
      link: "https://github.com/isr4t/Admin-dashboard-react.git",
    },
    {
      id: 2,
      title: "Freshify – Grocery site",
      image: Project2,
      description:
       "Freshify – responsive grocery e-commerce site with React.js & Tailwind CSS for smooth browsing.",
      link: "https://github.com/isr4t/Freshify-Grocery-ecommerce-website-react.js",
    },
    {
      id: 3,
      title: "ReelBox Movie Website",
      image: Project3,
      description:
        "A modern React-based movie website with API integration, search, and responsive layout.",
      link: "https://github.com/isr4t/ReelBox-movie-website-react.git",
    },
    {
      id: 4,
      title: "To-Do App using React ",
      image: Project4,
      description:
       "A React-based To-Do app to manage tasks efficiently with add, edit, and delete features in a clean, interactive interface.",
      link: "github.com/isr4t/React-to-do-app.git",
    },
    {
      id: 5,
      title: "Currency Converter App ",
      image: Project5,
      description:
       "Currency converter app using javascript and api ",
      link: "https://github.com/isr4t/Currency-converter-js.git",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-neutral-900 text-white py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {projectData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-neutral-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-gray-400 mb-5">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
