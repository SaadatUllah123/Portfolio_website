"use client";
import HomePage from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <HomePage />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
