import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="about__inner">
        <h2>Sobre Mim</h2>
        <div className="about__card">
          <p>
            Desenvolvedor Full Stack focado em Front-end, com experiência em React.js, Next.js e Node.js. Crio interfaces modernas e responsivas, integradas a back-ends eficientes com Express, Prisma e Docker. Apaixonado por transformar ideias em produtos digitais que resolvem problemas reais.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
