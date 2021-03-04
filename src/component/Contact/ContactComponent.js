import React from 'react';
import { ContactForm } from './columns/ContactForm';
import { ContactSocialMedia } from './columns/ContactSocialMedia';
import './Contact.css';

export const ContactComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <ContactSocialMedia />
        <ContactForm />
      </div>
    </div>
  );
};
