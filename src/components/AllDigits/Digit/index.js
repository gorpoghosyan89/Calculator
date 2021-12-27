import React from "react";

function Digit({ item, setCurrentValue }) {
  const handlerOnClick = (e) => {
    setCurrentValue((prev) => {
      if (item === "+/-" || prev.length >= 20) {
        return prev;
      } else {
        return prev === 0 ? item : `${prev}${item}`;
      }
    });
  };

  return (
    <div
      className="text-center"
      onClick={(e) => {
        handlerOnClick(e);
      }}
    >
      <span className="display-7 fw-normal">{item}</span>
    </div>
  );
}

export default Digit;
