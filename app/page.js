import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 10;

export const metadata = {
  title: "Brett's Web Development Portfolio",
  description: "Portfolio for full-stack web developer in Tampa, FL",
  alternates: {
    canonical: "https:www.brettwestwood.dev"
  }
  
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
