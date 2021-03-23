import React, { useEffect, useState } from "react";
import { getOrganization } from "../../../services/querys/organizationServices";

function SocialMedia({ id }) {
  let [facebookContact, setFacebookContact] = useState();
  let [twitterContact, setTwitterContact] = useState();
  let [linkedinContact, setLinkedinContact] = useState();
  let [instagramContact, setInstagramContact] = useState();

  useEffect(() => {
    async function fetchOrganizationContacts() {
      const response = await getOrganization(id);
      setFacebookContact(response.contactFacebook);
      setTwitterContact(response.contactTwitter);
      setLinkedinContact(response.contactLinkedin);
      setInstagramContact(response.contactInstagram);
    }

    fetchOrganizationContacts();
  }, [id]);

  return (
    <div className="col-md-4 column item">
      <h3>¡Seguinos en nuestras redes!</h3>
      <div className="col item social">
        <a href="#">
          <i className="bi bi-facebook">{facebookContact}</i>
        </a>
        <a href="#">
          <i className="bi bi-twitter">{twitterContact}</i>
        </a>
        <a href="#">
          <i className="bi bi-linkedin">{linkedinContact}</i>
        </a>
        <a href="#">
          <i className="bi bi-instagram">{instagramContact}</i>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
