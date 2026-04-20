"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Project = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  repo?: string;
  updated?: string;
};

const projectsByCategory: Record<string, Project[]> = {
  'Codebase Projects': [

    {
      id: 'code-4',
      title: 'springBoot-smartCampus-webApp',
      description: 'A scalable Smart Campus management platform developed using Spring Boot, featuring secure authentication, student management, and streamlined administrative workflows.',
      tags: ['React-frontend','springBoot-backend', 'MongoDB', 'TailwindCSS', 'SpringBoot'],
      image: '/images/p3.png',
      repo: 'https://github.com/helloanupa/react-ceylonGalleria-webApp.git',
      updated: '2024',
    },

    {
      id: 'code-3',
      title: 'react-ceylonGalleria-webApp',
      description: 'A modern React web application showcasing Ceylon Galleria, featuring a clean UI for browsing products, galleries, and an interactive user experience. for Artist Janith Weerasinghe.',
      tags: ['React-frontend', 'MongoDB', 'TailwindCSS', 'NodeJS', 'ExpressJS'],
      image: '/images/p3.png',
      repo: 'https://github.com/helloanupa/react-ceylonGalleria-webApp.git',
      updated: '2024',
    },

     {
      id: 'code-2',
      title: 'java-cyberTrustSystem',
      description: 'A Java-based security system designed to monitor, detect, and manage cyber threats with secure user authentication and data protection features.',
      tags: ['JAVA-backend', 'CSS', 'JS', 'JDBC', 'SQL'],
      image: '/images/p1.png',
      repo: 'https://github.com/helloanupa/java-cyberTrust-system.git',
      updated: '2024',
    },

   {
      id: 'code-1',
      title: 'rideReady-carRentalSystem',
      description:
        'A simple and responsive car rental system built with PHP that allows users to browse, book, and manage ride-ready vehicles efficiently.',
      image: '/images/p22.png',
      repo: 'https://github.com/helloanupa/php-ride-ready-carRental-system.git',
      tags: ['PHP-backend', 'HTML', 'CSS'],
      updated: '2023',
    },
    
  ],
  
};

function GitHubIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="currentColor"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.48-2.69-.92-.09-.23-.48-.92-.82-1.11-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

const WorkPage: React.FC = () => {
  const allProjects = Object.values(projectsByCategory).flat();

  const getInitials = (title: string) =>
    title
      .split(' ')
      .map((s) => s[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333] font-sans">
      <Header active="work" />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Explore myProjects</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Documented Work Demonstrating Practical System Design and Real-World Implementation
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((p) => (
            <article
              key={p.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition"
            >
              {/* Image area: 360x200 (responsive down to card width) */}
              {p.image ? (
                <div className="w-full flex justify-center bg-gray-50">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={360}
                    height={200}
                    className="w-full h-[200px] max-w-[360px] object-cover"
                  />
                </div>
              ) : (
                <div className="w-full flex justify-center bg-gray-50">
                  <div className="w-full h-[200px] max-w-[360px] rounded-t-md bg-gradient-to-br from-indigo-600 to-blue-400 text-white flex items-center justify-center font-semibold text-2xl">
                    {getInitials(p.title)}
                  </div>
                </div>
              )}

              <div className="p-4 flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">{p.title}</h3>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{p.description}</p>

                    {p.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="ml-3 flex items-start">
                    <a
                      href={p.repo || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} repository`}
                      className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs bg-gray-50 hover:bg-gray-100 border border-gray-100 transition"
                    >
                      <GitHubIcon />
                      <span className="text-[11px] text-gray-700">Repository</span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 text-right text-[11px] text-gray-400">{p.updated ? `Updated ${p.updated}` : ''}</div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
