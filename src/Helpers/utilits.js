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
  return  prev = -prev;
};

// Make Decimal Number

export const MakeDecimalNumber = (prev) => {
  return  `${prev}.`;
};