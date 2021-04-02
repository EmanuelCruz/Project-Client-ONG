import React, { useEffect, useState } from "react";
import { getOrganization } from "../../../services/querys/organizationServices";

function SocialMedia({ id }) {
  let [facebookContact, setFacebookContact] = useState();
  let [instagramContact, setInstagramContact] = useState();

  useEffect(() => {
    async function fetchOrganizationContacts() {
      const response = await getOrganization(id);
      setFacebookContact(response.contactFacebook);
      setInstagramContact(response.contactInstagram);
    }

    fetchOrganizationContacts();
  }, [id]);

  return (
    <div className="col-md-4 column item">
      <h3>¡Seguinos en nuestras redes!</h3>
      <div className="col item social">
        <a
          href="https://www.facebook.com/fundacionzonasgrises/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-facebook">{facebookContact}</i>
        </a>
        <a
          href="https://www.instagram.com/fundacionzonasgrises/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram">{instagramContact}</i>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
