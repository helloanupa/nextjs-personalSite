"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkPage: React.FC = () => {

  const projects = [
    {
      title: "Ceylon Galleria",
      image: "/images/project1.png",
      labels: ["React", "Node.js", "MongoDb", "Express", "TailwindCSS"],
      link: "https://github.com/helloanupa/ceylonGalleria#"
    },
    
    {
      title: "Cyber Trust",
      image: "/images/project2.png",
      labels: ["Java", "MySQL", "TailwindCSS"],
      link: "/projects/horizon-atlas"
    },
     {
      title: "Ride Ready",
      image: "/images/project2.png",
      labels: ["HTML", "PHP", "JavaScript", "Css"],
      link: "/projects/horizon-atlas"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333] font-sans">
      <Header active="work" />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Text */}
        <div className="max-w-2xl mb-12">
          <p className="text-gray-500 text-lg leading-snug">
            A collection of projects showcasing my expertise in web development, design, and digital solutions. 
            <span className="text-black font-semibold block mt-1">From startups to enterprise applications :</span>
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-500 hover:scale-[1.01]"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-medium mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.labels.map((label, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1 rounded-full border border-white/40 text-white text-xs backdrop-blur-sm hover:bg-white hover:text-black transition-colors"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* --- IMPROVED LINK BUTTON --- */}
                <Link 
                  href={project.link} 
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-blue-500 hover:text-white hover:border-transparent shadow-md transition-all"
                >
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
