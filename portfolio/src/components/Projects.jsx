import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

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
            image={project.coverImage}
            slug={project.slug}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;