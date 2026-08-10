import { Link } from "react-router-dom";
import interiorProjects from "../data/interiorProjects";

function InteriorDesign() {
  const project = interiorProjects[0];

  return (
    <section
      className="interior-design"
      id="interior-design"
    >

      <div className="interior-design-header">

        <span>INTERIOR DESIGN</span>

        <h2>
          Spaces Designed
          <br />
          With Purpose.
        </h2>

        <p>
          A selection of interior spaces designed to balance
          functionality, comfort and refined aesthetics.
        </p>

      </div>


      <div className="interior-feature">

        <div className="interior-feature-image">

          <img
            src={project.coverImage}
            alt={project.title}
          />

        </div>


        <div className="interior-feature-content">

          <span className="interior-category">
            {project.category}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="interior-meta">

            <div>
              <small>Location</small>
              <strong>{project.location}</strong>
            </div>

            <div>
              <small>Year</small>
              <strong>{project.year}</strong>
            </div>

          </div>

          <Link
            to={`/interior-design/${project.slug}`}
            className="interior-view-button"
          >
            View Interior Project →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default InteriorDesign;