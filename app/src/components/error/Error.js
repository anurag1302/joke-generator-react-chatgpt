import React from "react";

const Error = ({ errorMessage }) => {
  return (
    <div className="mt-lg-5 text-danger">
      <strong>{errorMessage}</strong>
    </div>
  );
};

export default Error;
