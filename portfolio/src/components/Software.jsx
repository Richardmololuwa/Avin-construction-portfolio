const software = [
    "AutoCAD",
  "SketchUp",
  "Revit",
  "InDesign",
]


function Software() {
  return (
    <section id="software" className="software">
      <h2>My Software</h2>

      <div className="software-grid">
        {software.map((tool) => (
          <div className="software-card" key={tool}>
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Software;