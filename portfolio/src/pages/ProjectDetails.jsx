import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import projects from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <main className="project-not-found">
        <h2>Project Not Found</h2>

        <Link to="/#projects">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  /* =========================
     GALLERY NAVIGATION
  ========================= */

  const nextImage = () => {
    setSelectedImage((current) => {
      if (current === null) return 0;

      return (current + 1) % project.images.length;
    });
  };

  const previousImage = () => {
    setSelectedImage((current) => {
      if (current === null) return 0;

      return (
        (current - 1 + project.images.length) %
        project.images.length
      );
    });
  };

  return (
    <main className="project-details">

      <div className="project-details-container">

        {/* BACK TO PROJECTS */}

        <Link
          to="/#projects"
          className="back-link"
        >
          ← Back to Projects
        </Link>


        {/* HEADER */}

        <header className="project-details-header">

          <span>{project.tech}</span>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

        </header>


        {/* HERO IMAGE */}

        <div className="project-details-hero">

          <img
            src={project.coverImage}
            alt={project.title}
          />

        </div>


        {/* PROJECT INFORMATION */}

        <section className="project-info">

          <div>
            <span>Location</span>
            <strong>{project.location}</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>{project.tech}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>

        </section>


        {/* DESCRIPTION */}

        <section className="project-description">

          <h2>Project Overview</h2>

          <p>
            {project.description}
          </p>

          <h2>Design Concept</h2>

          <p>
            {project.concept}
          </p>

        </section>


        {/* PROJECT GALLERY */}

        {project.video ? (
  <section className="project-video">

    <h2>Project Walkthrough</h2>

    <div className="project-video-container">
      <video
        controls
        playsInline
        poster={project.coverImage}
      >
        <source src={project.video} type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>

  </section>
) : (
  <section className="project-gallery">

    <h2>Project Gallery</h2>

    <div className="gallery-grid">

      {project.images.map((image, index) => (

        <button
          key={index}
          type="button"
          className="gallery-item"
          onClick={() => setSelectedImage(image)}
        >
          <img
            src={image}
            alt={`${project.title} ${index + 1}`}
          />
        </button>

      ))}

    </div>

  </section>
)}

      </div>


      {/* =================================
          LIGHTBOX
      ================================= */}

      {selectedImage !== null && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE */}

          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            ✕
          </button>


          {/* PREVIOUS */}

          <button
            type="button"
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ←
          </button>


          {/* IMAGE */}

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={project.images[selectedImage]}
              alt={`${project.title} ${selectedImage + 1}`}
            />

            <span className="image-counter">
              {selectedImage + 1} / {project.images.length}
            </span>

          </div>


          {/* NEXT */}

          <button
            type="button"
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            →
          </button>

        </div>

      )}


      {/* FOOTER */}

      <div className="project-details-footer">

        <Link to="/#projects">
          ← Back to Projects
        </Link>

      </div>

    </main>
  );
}

export default ProjectDetails;