import React from "react";
import { arrays } from "../data";

// Rendering Operators Components

export const RenderOperations = (arr, Component, setCurrentValue) => {
  return (
    <div className="d-flex flex-wrap">
      {arr.map((el, index) => {
        return (
          <Component
            key={index}
            item={el}
            className={arrays}
            setCurrentValue={setCurrentValue}
          />
        );
      })}
    </div>
  );
};

// Resign Current Value

export const ReSignValue = (prev) => {
  return `${(prev = -prev)}`;
};

// Make Decimal Number

export const MakeDecimalNumber = (prev) => {
  return !prev.toString().includes(".") ? `${prev}.` : `${prev}`;
};

// Clear Last Digit

export const ClearLastDigit = (prev) => {
  return (prev = prev.toString().slice(0, -1));
};

//  1/x

export const DivideOneToCurrentNumber = (prev) => {
  return prev !== 0 ? 1 / Number(prev) : alert('The number must not be zero');
};

//  x*2

export const QuadratePowerCurrentNumber = (prev) => {
  return Math.pow(prev, 2);
};

//  √x

export const QuadrateSquareCurrentNumber = (prev) => {
  return prev >= 0 ? Math.sqrt(prev) : alert('The number must more than 0');
};
