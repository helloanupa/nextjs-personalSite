"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Project = {
	id: string;
	title: string;
	description: string;
	repo?: string;
	image?: string;
};

const categories = ["Project CodeBase", "Project CyberUniversal", "Project Evilcodes"];

const projectsByCategory: Record<string, Project[]> = {
	"Project CodeBase": [
		{
			id: "codebase-1",
			title: "CodeBase Studio",
			description:
				"A modular monorepo tooling suite for building scalable web apps with TypeScript — focused on DX and CI/CD.",
			repo: "https://github.com/helloanupa/codebase-studio",
			image: "/images/12.png",
		},
		{
			id: "codebase-2",
			title: "Tiny CLI",
			description: "Lightweight developer CLI utilities for scaffolding, linting and release automation.",
			repo: "https://github.com/helloanupa/tiny-cli",
		},
	],
	"Project CyberUniversal": [
		{
			id: "cyber-1",
			title: "CyberUniversal Core",
			description:
				"Research-focused security tooling and simulation environment for threat modeling and blue-team exercises.",
			repo: "https://github.com/helloanupa/cyber-universal",
			image: "/images/12.png",
		},
	],
	"Project Evilcodes": [
		{
			id: "evil-1",
			title: "Evilcodes Labs",
			description:
				"Experimental projects exploring obfuscation, code transformations and defensive countermeasures.",
			repo: "https://github.com/helloanupa/evilcodes-labs",
		},
	],
};

function GitHubIcon({ className = "inline-block" }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 16 16"
			fill="currentColor"
			width="16"
			height="16"
			aria-hidden="true"
		>
			<path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.48-2.69-.92-.09-.23-.48-.92-.82-1.11-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
		</svg>
	);
}

const Experience: React.FC = () => {
	const [active, setActive] = useState<string>(categories[0]);

	const getInitials = (title: string) => {
		return title
			.split(" ")
			.map((s) => s[0])
			.slice(0, 2)
			.join("")
			.toUpperCase();
	};

	return (
		<div className="min-h-screen bg-transparent text-[#333] selection:bg-blue-100">
			<Header active="experience" />

			<main className="max-w-6xl mx-auto px-6 py-12">
				<header className="mb-8">
					<h1 className="text-3xl md:text-4xl font-semibold">Projects & Experience</h1>
					<p className="mt-2 text-gray-600">Curated projects grouped into focused categories — compact cards with quick links to repositories.</p>
				</header>

				<div className="flex gap-3 items-center mb-8 flex-wrap">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActive(cat)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition ${
								active === cat
									? "bg-blue-600 text-white shadow"
									: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{(projectsByCategory[active] || []).map((p) => (
						<article key={p.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
							<div className="shrink-0">
								{p.image ? (
									<img src={p.image} alt={p.title} className="w-14 h-14 object-cover rounded-md border border-gray-100" />
								) : (
									<div className="w-14 h-14 rounded-md bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white font-semibold">
										{getInitials(p.title)}
									</div>
								)}
							</div>

							<div className="flex-1 min-w-0">
								<h3 className="text-sm font-semibold text-gray-900 truncate">{p.title}</h3>
								<p className="mt-1 text-xs text-gray-500 leading-relaxed">{p.description}</p>

								<div className="mt-3 flex items-center space-x-3">
									<a
										href={p.repo || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs bg-gray-50 hover:bg-gray-100 border border-gray-100 transition"
										aria-label={`Open ${p.title} repository`}
									>
										<GitHubIcon />
										<span className="text-[11px] text-gray-700">Repository</span>
									</a>

									<span className="text-[11px] text-gray-400">•</span>
									<span className="text-[11px] text-gray-500">Updated 2024</span>
								</div>
							</div>

							<div className="ml-3 hidden md:flex items-center">
								<a
									href={p.repo || "#"}
									target="_blank"
									rel="noopener noreferrer"
									title="Open repository"
									className="p-2 rounded-md hover:bg-gray-100 transition"
								>
									<GitHubIcon />
								</a>
							</div>
						</article>
					))}
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Experience;

