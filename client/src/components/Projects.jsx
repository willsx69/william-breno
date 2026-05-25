const projects = [
  {
    title: "Açai da laurinha",
    description: "Desenvolvi um e-commerce para venda de açaí, focado em simplificar pedidos em regiões rurais. O sistema permite selecionar produtos, escolher a área de entrega com taxa fixa e finalizar o pedido via WhatsApp.",
    tech: ["React", "Node.js"],
    image: "https://placehold.co/600x400/1a1a1a/60a5fa?text=Açai+da+Laurinha",
    link: "https://laurinha-acai-ecommerce.vercel.app/",
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do projeto.",
    tech: ["React", "Express"],
    image: "https://placehold.co/600x400/1a1a1a/60a5fa?text=Projeto+2",
    link: "#",
  },
  {
    title: "Projeto 3",
    description: "Descrição breve do projeto.",
    tech: ["React", "MongoDB"],
    image: "https://placehold.co/600x400/1a1a1a/60a5fa?text=Projeto+3",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
