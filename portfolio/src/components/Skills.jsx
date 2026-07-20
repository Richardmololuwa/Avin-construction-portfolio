const skills = [
  "Architectural Design",
  "Space Planning",
  "3D Modeling",
  "Rendering and visualization"
];



function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

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