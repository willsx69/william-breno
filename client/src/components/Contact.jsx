import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  {
    label: "Email",
    value: "williambreno666@gmail.com",
    href: "mailto:williambreno666@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    ),
  },
  {
    label: "Telefone",
    value: "+55 (92) 98126-6769",
    href: "tel:+5592981266769",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92V20a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3.06a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Localização",
    value: "Manaus (AM)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("sucesso");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("erro");
        console.error(data.error);
      }
    } catch {
      setStatus("erro");
    }
  };

  return (
    <AnimatedSection id="contact">
      <h2>Contato</h2>
      <div className="contact__grid">
        <div className="contact__info">
          <h3 className="contact__subtitle">Vamos conversar!</h3>
          <p className="contact__description">
            Estou disponível para novos projetos, oportunidades ou parcerias.
            Entre em contato por qualquer um dos canais abaixo.
          </p>
          {contactInfo.map((item) => (
            <div key={item.label} className="contact__card">
              <div className="contact__card-icon">{item.icon}</div>
              <div>
                <span className="contact__card-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="contact__card-value">
                    {item.value}
                  </a>
                ) : (
                  <span className="contact__card-value">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="contact__form-wrapper">
          <h3 className="contact__form-title">Envie uma mensagem</h3>
          <p className="contact__form-desc">
            Preencha o formulário abaixo e entrarei em contato em breve.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Seu email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === "enviando"}>
              {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
            </button>
            {status === "sucesso" && <p className="success">Mensagem enviada com sucesso!</p>}
            {status === "erro" && <p className="error">Erro ao enviar. Tente novamente.</p>}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
