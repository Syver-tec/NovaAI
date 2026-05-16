import Hero from "./sections/Hero";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;
