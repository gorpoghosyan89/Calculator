import React from "react";
import {
  ClearLastDigit,
  DivideOneToCurrentNumber,
  QuadratePowerCurrentNumber,
  QuadrateSquareCurrentNumber,
  DivideCurrentNumbers,
} from "../../../Helpers/utilits";

function SecondLevelOperation({ item, setCurrentValue }) {
  const handlerOnSecondLevelClick = () => {
    setCurrentValue((prev) => {
      return item === "1/x"
        ? DivideOneToCurrentNumber(prev)
        : item === "←"
        ? ClearLastDigit(prev)
        : item === "x*2"
        ? QuadratePowerCurrentNumber(prev)
        : item === "√x"
        ? QuadrateSquareCurrentNumber(prev)
        : item === "/"
        ? DivideCurrentNumbers(prev)
        : item === "C" || item === "CE"
        ? setCurrentValue(0)
        : setCurrentValue(prev);
    });
  };

  return (
    <div
      className="text-center"
      onClick={() => {
        handlerOnSecondLevelClick();
      }}
    >
      <span className="display-7  fw-normal">{item}</span>
    </div>
  );
}

export default SecondLevelOperation;
