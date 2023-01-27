import React from "react";

const Result = ({ joke }) => {
  return (
    <div>
      <div className="mt-lg-5">
        <strong>{joke}</strong>
      </div>
    </div>
  );
};

export default Result;
