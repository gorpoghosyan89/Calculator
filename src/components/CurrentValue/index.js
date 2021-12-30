import React from "react";

function CurrentValue({state}) {
  return (
    <div className="current-value-block text-end">
      <span className="display-6 fw-light">{state} </span>
    </div>
  );
}

export default CurrentValue;
