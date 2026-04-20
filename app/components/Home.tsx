"use client"; // This must be the very first line

import React from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowRight, Download } from "lucide-react";

const Portfolio: React.FC = () => {
  const handleCVDownload = () => {
    // Create a link to download CV - adjust the path based on where you store your CV
    const cvUrl = "/cv.pdf"; // Place your CV.pdf in the public folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Anupa-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#333] font-sans selection:bg-blue-100">
      <Header active="home" />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Image */}
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src="/images/myimage.avif" alt="Anupa" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6 text-[16px] leading-relaxed text-gray-700">
          <p>
            I'm <span className="font-semibold text-black text-lg">Anupa Denil Amarasekara</span>, an Information Technology undergraduate with a strong passion for building meaningful digital solutions that combine technology, design, and real-world impact. My journey in development began in 2019 and has grown into a focused pursuit of excellence across web development, UI/UX design, application development, and emerging technologies. I am currently reading for a BSc (Hons) in Information Technology at SLIIT, having completed my secondary education at Ananda College Colombo-10, where my interest in engineering and technology first took shape.

            <br />
            <br />
            My technical interests extend beyond traditional development into areas such as Internet of Things (IoT), smart embedded systems, and API-driven architectures. I have earned certifications in C++, serverless application design using Amazon API Gateway, generative AI business strategy, and digital transformation, reflecting my commitment to continuous learning and adaptability in a fast-evolving industry. I enjoy working at the intersection of technology and strategy, where scalable systems, clean interfaces, and thoughtful user experiences come together.
          </p>

          <p>
            Beyond academics and projects, I actively contribute to the <a href="https://www.instagram.com/devbyanupa?igsh=ZGN2bDBvMG02cDI4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">devbyanupa</a> tech Page by sharing knowledge with 1,000+ learners on Instagram, fostering collaboration, curiosity, and growth among aspiring developers. I value discipline, consistency, and long-term thinking, and I approach every opportunity as a chance to learn and refine my craft.
          </p>

          <p className="italic text-gray-500 pt-4">
            I am always open to meaningful collaborations, and projects that challenge me to grow while contributing value to people, products, and organizations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link
              href="/work"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Explore My Projects
              <ArrowRight size={18} strokeWidth={2} />
            </Link>

            <button
              onClick={handleCVDownload}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Download CV
              <Download size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </main>

      {/* GitHub contributions (centered) */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center">
        <h2 className="text-xl font-semibold mb-4">3500+ GitHub Contributions (2023-2024) 🐙</h2>
        <a href="https://github.com/helloanupa" target="_blank" rel="noopener noreferrer" className="inline-block">
          <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="/images/12.png"
              alt="GitHub contributions (2023-2024)"
              className="w-full max-w-[1200px] mx-auto h-auto object-contain"
            />
          </div>
        </a>
        <p className="mt-2 text-sm text-gray-500">Click & Visit My GitHub profile — github.com/helloanupa.</p>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
