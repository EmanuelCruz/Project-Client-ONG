import React from "react";
import LoaderLibrary from "react-loader-spinner";

function Loader({ isLoaded }) {
  if (!isLoaded) {
    return (
      <LoaderLibrary type="Puff" color="#00BFFF" height={100} width={100} />
    );
  } else {
    return null;
  }
}

export default Loader;
