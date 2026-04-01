import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="max-w-6xl mx-auto px-6 mt-12 pb-12">
			<div className="py-8 border-t border-gray-200 text-center space-y-6">
				<p className="text-[10px] text-black-400 uppercase tracking-[0.2em]">
					2019-2026 | designed by Anupa Denil Amarasekara
				</p>
				<div className="flex justify-center space-x-6 text-black-bold text-sm text-gray400">
					<a
						href="https://web.facebook.com/anupa.denil/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
						className="hover:text-black transition-colors"
					>
						<Facebook size={20} />
					</a>

					<a
						href="https://www.instagram.com/devbyanupa?igsh=ZGN2bDBvMG02cDI4&utm_source=qr"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="hover:text-black transition-colors"
					>
						<Instagram size={20} />
					</a>

					<a
						href="https://www.linkedin.com/in/anupadenil/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="hover:text-black transition-colors"
					>
						<Linkedin size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

