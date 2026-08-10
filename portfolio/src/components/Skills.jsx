const skills = [
  "BUILDING",
  "PROJECT HOME",
  "CUSTOM HOMES",
  "EXTENSIONS",
  "INTERIOR DESIGN",
  "CONSTRUCTION",
  "RENOVATION"

];



function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>OUR SERVICE</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}


export default Skills;