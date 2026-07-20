import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Software from "./components/Software";
import Projects from "./components/Projects";
import Workingdrawing from "./components/WorkingDrawing"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Software />
      <Projects />
      <Workingdrawing />
      <Contact />
      <Footer />

    </>
  );
}

export default App;