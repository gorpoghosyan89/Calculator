import React from "react";
import { ReSignValue } from "../../../Helpers/utilits";
import { MakeDecimalNumber } from "../../../Helpers/utilits";

function Digit({ item, setCurrentValue }) {
  const handlerOnDigitsClick = () => {
    setCurrentValue((prev) => {
      if (prev.length >= 20) {
        return prev;
      } else if (item === "+/-") {
        return ReSignValue(prev);
      } else if (item === ".") {
        return MakeDecimalNumber(prev);
      } else {
        return prev === 0 ? item : `${prev}${item}`;
      }
    });
  };

  return (
    <div
      className="text-center"
      onClick={() => {
        handlerOnDigitsClick();
      }}
    >
      <span className="display-7 fw-normal">{item}</span>
    </div>
  );
}

export default Digit;
