const categories = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "React.js", icon: "react/react-original.svg" },
      { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "Express", icon: "express/express-original.svg" },
      { name: "Prisma", icon: "prisma/prisma-original.svg" },
      { name: "Docker", icon: "docker/docker-original.svg" },
    ],
  },
];

const iconUrl = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export default function Skills() {
  return (
    <section id="skills">
      <h2>Minhas Tecnologias</h2>
      <div className="skills-wrapper">
        {categories.map((cat) => (
          <div key={cat.title} className="skills-category">
            <h3 className="skills-subtitle">{cat.title}</h3>
            <div className="skills-grid">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <img
                    className="skill-icon"
                    src={iconUrl(skill.icon)}
                    alt={skill.name}
                    width={48}
                    height={48}
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
