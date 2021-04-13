import React, { useState, useEffect } from "react";
import EditOrganizationContent from "./EditOrganizationContent";

const EditOrganizationComponent = () => {
  const [defaultName, setDefaultName] = useState("");
  const [defaultLogo, setDefaultLogo] = useState("");

  const [newName, setNewName] = useState(defaultName);
  const [newLogo, setNewLogo] = useState("");

  const [nameInputOutlineColor, setNameInputOutlineColor] = useState("");
  const [logoInputOutlineColor, setLogoInputOutlineColor] = useState("");

  useEffect(() => {
    setNewName(defaultName);
  }, [defaultName]);

  useEffect(() => {
    setDefaultName("defaultName");
    setDefaultLogo(
      "https://www.freepnglogos.com/uploads/vodafone-png-logo/vodafone-logo-clarify-business-development-16.png"
    );
  }, []);

  return (
    <EditOrganizationContent
      newName={newName}
      setNewName={setNewName}
      nameInputOutlineColor={nameInputOutlineColor}
      newLogo={newLogo}
      setNewLogo={setNewLogo}
      logoInputOutlineColor={logoInputOutlineColor}
      defaultLogo={defaultLogo}
      setNameInputOutlineColor={setNameInputOutlineColor}
      setLogoInputOutlineColor={setLogoInputOutlineColor}
    />
  );
};

export default EditOrganizationComponent;
