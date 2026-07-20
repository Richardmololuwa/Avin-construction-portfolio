import ProjectCard from "./ProjectCard";
import hero from "../assets/images/hero.jpg";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Luxury Duplex",
    description:
      "A contemporary duplex featuring bold geometry, expansive glazing and premium finishes.",
    tech: "Residential",
    image: project1,
  },
  {
    id: 2,
    title: "Elegant Contemporary Villa",
    description:
      "Designed to maximize natural light while maintaining a sophisticated modern aesthetic.",
    tech: "Residential",
    image: hero,
  },
  {
    id: 3,
    title: "Modern Family Bungalow",
    description:
      "A spacious single-level home balancing functionality, comfort and timeless design.",
    tech: "Residential",
    image: project2,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
    {projects.map((project) => (
        <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            image={project.image}
        />
        ))}
      </div>
    </section>
  );
}

export default Projects;