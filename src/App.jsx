import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setError('Por favor, complete todos los campos');
    } else {
      setError(null);
      setSent(true);
    }
  };

  return (
    <div>
      <h1>Formulario de contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Asunto:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {sent && <div style={{ color: 'green' }}>Mensaje enviado con éxito!</div>}
    </div>
  );
};

export default ContactForm;