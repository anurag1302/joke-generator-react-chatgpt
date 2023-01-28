import React from "react";
import "./loadingSpinner.css";
import image from "../../images/ajax-loader.gif";

const LoadingSpinner = () => {
  return (
    <div className="loader-container">
      <img src={image} alt="Loader" />
    </div>
  );
};

export default LoadingSpinner;
