import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import interiorProjects from "../data/interiorProjects";

function InteriorDesignDetails() {
  const { slug } = useParams();

  const project = interiorProjects.find(
    (item) => item.slug === slug
  );

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <main className="interior-details-page">
        <div className="interior-not-found">
          <h1>Interior Project Not Found</h1>

          <Link to="/#interior-design">
            ← Back to Interior Design
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="interior-details-page">

      {/* BACK LINK */}

      <Link
        to="/#interior-design"
        className="interior-back-link"
      >
        ← Back to Interior Design
      </Link>


      {/* HEADER */}

      <header className="interior-details-header">

        <span className="interior-category">
          {project.category}
        </span>

        <h1>{project.title}</h1>

        <p>{project.description}</p>

      </header>


      {/* COVER IMAGE */}

      <section className="interior-cover">

        <img
          src={project.coverImage}
          alt={project.title}
        />

      </section>


      {/* PROJECT INFORMATION */}

      <section className="interior-info">

        <div>
          <span>Location</span>
          <strong>{project.location}</strong>
        </div>

        <div>
          <span>Year</span>
          <strong>{project.year}</strong>
        </div>

        <div>
          <span>Category</span>
          <strong>{project.category}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{project.status}</strong>
        </div>

      </section>


      {/* GALLERY */}

      {project.images.length > 0 && (
        <section className="interior-gallery">

          <div className="interior-section-heading">
            <span>PROJECT GALLERY</span>
            <h2>Interior Details</h2>
          </div>

          <div className="interior-gallery-grid">

            {project.images.map((image, index) => (
              <button
                key={index}
                type="button"
                className="interior-gallery-item"
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


      {/* VIDEOS */}

      {project.videos.length > 0 && (
        <section className="interior-videos">

          <div className="interior-section-heading">
            <span>PROJECT VIDEOS</span>
            <h2>Experience the Space</h2>
          </div>


          <div className="interior-video-grid">

            {project.videos.map((video, index) => (
              <div
                className="interior-video-card"
                key={index}
              >

                <video
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source
                    src={video}
                    type="video/mp4"
                  />

                  Your browser does not support
                  the video element.
                </video>

                <p>
                  Interior Design Project — Video {index + 1}
                </p>

              </div>
            ))}

          </div>

        </section>
      )}


      {/* LIGHTBOX */}

      {selectedImage && (
        <div
          className="interior-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="interior-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt={project.title}
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}


      {/* FOOTER LINK */}

      <div className="interior-details-footer">

        <Link to="/#interior-design">
          ← Back to Interior Design
        </Link>

      </div>

    </main>
  );
}

export default InteriorDesignDetails;