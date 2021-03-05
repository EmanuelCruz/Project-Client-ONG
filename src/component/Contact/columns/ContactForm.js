import React, { useState } from 'react';
import LoaderComponent from '../../LoaderComponent';

export const ContactForm = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isMessageSend, setIsMessageSend] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleInputChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoaded(false);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsLoaded(true);
      setIsMessageSend(true);
    }, 1000);

    setTimeout(() => {
      setIsMessageSend(false);
    }, 2000);
  };

  return (
    <div className="col-sm-6 mt-5">
      <h2>Contacto</h2>
      <form className="text-left" onSubmit={handleSubmit} id="contact">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            autoComplete="off"
            className="form-control"
            id="name"
            name="name"
            onChange={handleInputChange}
            placeholder="Ingresar su nombre"
            required
            type="text"
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            autoComplete="off"
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            required
            type="email"
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            autoComplete="off"
            className="form-control"
            id="message"
            name="message"
            onChange={handleInputChange}
            placeholder="Escriba su mensaje.."
            required
            rows="5"
            value={message}
          />
        </div>
        <button type="submit" className="btn btn-info form-control">
          Enviar
        </button>
      </form>
      <div className="mt-5">
        <LoaderComponent isLoaded={isLoaded} />
        {isMessageSend ? (
          <div className="alert alert-success">Mensaje enviado</div>
        ) : null}
      </div>
    </div>
  );
};
