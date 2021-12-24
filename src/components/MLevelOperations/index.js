import React from "react";
import MOperation from "./MOperation";
import { RenderOperations } from "../../Helpers/utilits";
import { arrays } from "../../data";

function MLevelOperations() {
  const mLevelOperationsArray = arrays.MLevelOperations.arr;
  return <>{RenderOperations(mLevelOperationsArray, MOperation)}</>;
}

export default MLevelOperations;
