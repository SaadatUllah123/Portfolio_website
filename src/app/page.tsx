"use client"
import HomePage from "../components/homePage" ;
import About from "../components/about";
import Services from "../components/services";
import Portfolio from "../components/portfolio";
import Contact from "..//components/contact";
import Footer from  "../components/footer"

export default function Home() {
  return (
    <div>
        <HomePage />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}
