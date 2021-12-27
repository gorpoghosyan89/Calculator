import React from "react";
import Digit from "./Digit";
import { RenderOperations } from "../../Helpers/utilits";
import { arrays } from "../../data";

function AllDigits({ setCurrentValue }) {
  const allDigitsArray = arrays.AllDigits.arr;

  return <>{RenderOperations(allDigitsArray, Digit, setCurrentValue)}</>;
}

export default AllDigits;
