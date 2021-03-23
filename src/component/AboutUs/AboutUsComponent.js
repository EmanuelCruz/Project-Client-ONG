import React, { useEffect, useState } from "react";
import { getMembersList } from "../../services/querys/membersServices";

const AboutUsComponent = () => {
  let [members, setMembers] = useState("");

  useEffect(() => {
    async function fetchMembers() {
      const response = await getMembersList();
      setMembers(response);
    }
    fetchMembers();
  }, [members]);

  return (
    <div className="aboutUsComponent">
      <h4>Estos son los miembros de nuestro equipo:{members}</h4>
    </div>
  );
};

export default AboutUsComponent;
