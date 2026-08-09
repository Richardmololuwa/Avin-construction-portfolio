import { Link } from "react-router-dom";

function ProjectCard({
  title,
  description,
  tech,
  image,
  slug,
}) {
  return (
    <div className="project-card">

      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <span>{tech}</span>

        <Link to={`/projects/${slug}`}>
          <button>View Project</button>
        </Link>

      </div>

    </div>
  );
}

export default ProjectCard;