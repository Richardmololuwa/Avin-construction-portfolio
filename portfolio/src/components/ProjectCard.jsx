function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>{tech}</span>

        <a href={link} target="_blank" rel="noreferrer">
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;