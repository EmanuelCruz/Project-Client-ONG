import React, { useEffect, useState } from "react";
import { getMembersList } from "../../services/querys/membersServices";

const AboutUsComponent = () => {
  let [members, setMembers] = useState();

  useEffect(() => {
    async function fetchMembers() {
      const response = await getMembersList();
      setMembers(response.data);
      console.log(response.data);
    }
    fetchMembers();
  }, []);

  return (
    <div className="aboutUsComponent">
      <h4>Estos son los miembros de nuestro equipo:</h4>
      {members?.map((member) => (
        <div className="aboutUsComponent__data" key={member.id}>
          <p className="aboutUsComponent__field"> Name: {member.name}</p>
          <div className="aboutUsComponent__field"> Image: {member.image}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsComponent;
