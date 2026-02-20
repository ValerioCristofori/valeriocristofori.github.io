import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-blue-950">
      <Navbar />
      <Hero />
      <About />
      <SocialLinks />
      <Footer />
    </div>
  );
}
