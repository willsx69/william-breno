import { useEffect, useState } from "react";
import perfil from "../assets/my_perfil.png";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setVisible(true);
    img.onerror = () => setVisible(true);
    img.src = perfil;
  }, []);

  return (
    <section id="hero" className={visible ? "hero--visible" : ""}>
      <div className="hero__content">
        <div className="hero__avatar">
          <div className="hero__glow" />
          <img src={perfil} alt="William Breno" />
        </div>
        <h1 className="hero__title">
          Olá, eu sou <span className="hero__highlight">William Breno</span>
        </h1>
        <p className="hero__role">Desenvolvedor Full Stack</p>
        <p className="hero__description">
          Transformando ideias em produtos digitais modernos e funcionais
        </p>
        <div className="hero__actions">
          <a href="#about" className="btn btn--primary">
            Conheça meu trabalho
          </a>
          <a href="#contact" className="btn btn--outline">
            Entre em contato
          </a>
        </div>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-text">Role para conhecer</span>
        <div className="hero__scroll-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
