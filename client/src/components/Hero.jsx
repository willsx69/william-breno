import perfil from "../assets/my_perfil.png";

export default function Hero() {
  return (
    <section id="hero">
      <img src={perfil} alt="William Breno" className="perfil" />
      <h1>Olá, eu sou William Breno</h1>
      <p>Desenvolvedor Full Stack</p>
    </section>
  );
}
