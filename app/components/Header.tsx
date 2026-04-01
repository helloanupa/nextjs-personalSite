"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Props = {
	active?: string;
};

const Header: React.FC<Props> = ({ active }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ name: "home", href: "/" },
		{ name: "work", href: "/work" },
		{ name: "experience", href: "#" },
		{ name: "contact", href: "/contact" },
		{ name: "myArea", href: "#" },
	];

	return (
		<nav className="sticky top-0 z-50 bg-[#f8f8f8]/80 backdrop-blur-md border-b border-gray-100 md:border-none">
			<div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
				<Link href="/" className="text-xl font-medium tracking-tighter cursor-pointer">
					Anupa Amarasekara
				</Link>

				<div className="hidden md:flex space-x-8 text-sm text-gray-500">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`${(active === link.name) ? "text-blue-500" : "hover:text-black"} transition-colors`}
						>
							{link.name}
						</Link>
					))}
				</div>

				<button
					className="md:hidden p-1 text-gray-600 focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
				</button>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 shadow-xl py-4 transition-all z-50">
					<div className="flex flex-col px-8 space-y-4">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={() => setIsMenuOpen(false)}
								className={`text-base ${(active === link.name) ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-black'}`}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Header;

