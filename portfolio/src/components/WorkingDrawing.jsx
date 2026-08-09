import Drawingcard from "./Drawingcard";
import drawing1 from "../assets/images/drawing1.jpg";
import drawing2 from "../assets/images/drawing2.jpg";

const drawings = [
  {
    id: 1,
    title: "Working Drawing 1",
    description: "Residential design of a 6-bedroom bungalow",
    tech: "Residential",
    image: drawing1,
  },
  
];

function Drawing() {
  return (
    <section id="drawing" className="drawing">
      <h2>Working Drawings</h2>

      <div className="drawing-grid">
        {drawings.map((drawing) => (
          <Drawingcard
            key={drawing.id}
            title={drawing.title}
            description={drawing.description}
            tech={drawing.tech}
            image={drawing.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Drawing;