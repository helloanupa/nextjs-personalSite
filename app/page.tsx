// app/page.tsx
import type { Metadata } from "next";
import Home from './components/Home';

export const metadata: Metadata = {
  title: "Anupa Denil | Software Engineer & Web Developer",
  description:
    "Anupa Denil - Software Engineer, Web Developer, and Programmer specializing in JavaScript, C++, and modern web apps.",
  keywords: [
    "Anupa Denil Amarasekara",
    "Anupa Denil",
    "Anupa Amarasekara",
    "Anupa",
    "Software Engineer Sri Lanka",
    "Web Developer Portfolio",
    "JavaScript Developer",
  ],
  authors: [{ name: "Anupa Denil" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Home />;
}


