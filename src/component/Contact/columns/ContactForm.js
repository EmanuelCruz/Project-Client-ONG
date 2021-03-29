import React, { useState } from "react";
import LoaderComponent from "../../loader/LoaderComponent";
import { createNewContact } from "../../../services/querys/contactsService";
import { Button, TextField, Typography } from "@material-ui/core";

export const ContactForm = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isMessageSend, setIsMessageSend] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      setFormData({ name: "", email: "", message: "" });
      setIsLoaded(true);
      setIsMessageSend(true);
    }, 1000);

    setTimeout(() => {
      setIsMessageSend(false);
    }, 2000);

    //* Send form data to API for create a new contact *
    createNewContact(formData);
  };

  return (
    <div className="col-sm-6 mt-5">
      <Typography variant="h2">Contacto</Typography>
      <form className="text-left" onSubmit={handleSubmit} id="contact">
        <div className="form-group">
          <TextField
            autoComplete="off"
            color="secondary"
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            onChange={handleInputChange}
            required
            type="text"
            value={name}
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            autoComplete="off"
            color="secondary"
            fullWidth
            id="email"
            label="email"
            name="email"
            onChange={handleInputChange}
            required
            type="email"
            value={email}
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            autoComplete="off"
            color="secondary"
            fullWidth
            id="message"
            label="Mensaje"
            multiline
            name="message"
            onChange={handleInputChange}
            required
            rows={5}
            value={message}
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          color="secondary"
        >
          Enviar
        </Button>
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
