import { useState } from "react";
import drawings from "../data/drawings";

function ArchitecturalDrawings() {
  const [showAll, setShowAll] = useState(false);
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  const featuredDrawing = drawings[0];

  return (
    <section
      className="architectural-drawings"
      id="drawings"
    >

      {/* HEADER */}

      <div className="drawings-header">

        <span className="section-tag">
          ARCHITECTURAL WORK
        </span>

        <h2>Architectural Drawings</h2>

        <p>
          A collection of architectural plans, elevations,
          sections and technical drawings showcasing the
          design process behind each project.
        </p>

      </div>


      {/* FEATURED DRAWING */}

      {featuredDrawing && (
        <div className="featured-drawing">

          <button
            type="button"
            className="featured-drawing-image"
            onClick={() =>
              setSelectedDrawing(featuredDrawing)
            }
          >
            <img
              src={featuredDrawing.image}
              alt={featuredDrawing.title}
            />
          </button>

          <div className="featured-drawing-info">

            <span>
              {featuredDrawing.type}
            </span>

            <h3>
              {featuredDrawing.title}
            </h3>

            <button
              type="button"
              className="view-drawing"
              onClick={() =>
                setSelectedDrawing(featuredDrawing)
              }
            >
              View Drawing
            </button>

          </div>

        </div>
      )}


      {/* VIEW ALL BUTTON */}

      <div className="view-all-drawings">

        <button
          type="button"
          onClick={() => setShowAll(true)}
        >
          View All Drawings
        </button>

      </div>


      {/* ALL DRAWINGS MODAL */}

      {showAll && (
        <div
          className="drawings-modal"
          onClick={() => setShowAll(false)}
        >

          <div
            className="drawings-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="drawings-modal-header">

              <div>
                <span className="section-tag">
                  ARCHITECTURAL WORK
                </span>

                <h2>All Drawings</h2>
              </div>

              <button
                type="button"
                className="drawings-modal-close"
                onClick={() => setShowAll(false)}
              >
                ✕
              </button>

            </div>


            {/* DRAWINGS GRID */}

            <div className="drawings-grid">

              {drawings.map((drawing) => (

                <article
                  className="drawing-card"
                  key={drawing.id}
                >

                  <button
                    type="button"
                    className="drawing-image-button"
                    onClick={() =>
                      setSelectedDrawing(drawing)
                    }
                  >
                    <img
                      src={drawing.image}
                      alt={drawing.title}
                    />
                  </button>

                  <div className="drawing-content">

                    <span>
                      {drawing.type}
                    </span>

                    <h3>
                      {drawing.title}
                    </h3>

                    <button
                      type="button"
                      className="view-drawing"
                      onClick={() =>
                        setSelectedDrawing(drawing)
                      }
                    >
                      View Drawing
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>
      )}


      {/* DRAWING LIGHTBOX */}

      {selectedDrawing && (

        <div
          className="drawing-lightbox"
          onClick={() => setSelectedDrawing(null)}
        >

          <button
            type="button"
            className="drawing-lightbox-close"
            onClick={() =>
              setSelectedDrawing(null)
            }
          >
            ✕
          </button>

          <div
            className="drawing-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedDrawing.image}
              alt={selectedDrawing.title}
            />

            <div className="drawing-lightbox-info">

              <span>
                {selectedDrawing.type}
              </span>

              <h3>
                {selectedDrawing.title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default ArchitecturalDrawings;