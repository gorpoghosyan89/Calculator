import React from "react";

function Digit({ item }) {
  return (
    <div className="col-4 text-center">
      <span className="display-7 fw-normal">{item}</span>
    </div>
  );
}

export default Digit;
