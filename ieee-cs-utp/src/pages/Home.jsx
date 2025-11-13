import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutSection from "../components/AboutSection";
import Committees from "../components/Committees";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="pt-24"> 
      <Hero />
      <Stats />
      <AboutSection />
      <Committees />
      <Benefits />
      <Footer />
    </div>
  );
}
