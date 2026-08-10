import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Software from "./components/Software";
import Projects from "./components/Projects";
import Workingdrawing from "./components/WorkingDrawing";
import Contact from "./components/Contact";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import ArchitecturalDrawings from "./components/ArchitecturalDrawings";
import ProjectDetails from "./pages/ProjectDetails";
import InteriorDesign from "./components/InteriorDesign";
import InteriorDesignDetails from "./pages/InteriorDesignDetails";
function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

  

      <Projects />

      <ArchitecturalDrawings />

      <InteriorDesign />

      <Contact />

      

      <Subscription />

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Main Portfolio */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Individual Projects */}
        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="/interior-design/:slug"
          element={<InteriorDesignDetails />}
        />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;