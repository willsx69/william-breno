const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Express", "Git", "CSS", "HTML"];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}
