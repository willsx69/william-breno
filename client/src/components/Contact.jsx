import { useState } from "react";

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
    <section id="contact">
      <h2>Contato</h2>
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
          {status === "enviando" ? "Enviando..." : "Enviar"}
        </button>
        {status === "sucesso" && <p className="success">Mensagem enviada com sucesso!</p>}
        {status === "erro" && <p className="error">Erro ao enviar. Tente novamente.</p>}
      </form>
    </section>
  );
}
