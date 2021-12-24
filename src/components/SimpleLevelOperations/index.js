import React from "react";
import SimpleLevelOperation from "./SimpleLevelOperation";
import { RenderOperations } from "../../Helpers/utilits";
import { arrays } from "../../data";

function SimpleLevelOperations() {
  const simpleLevelOperationsArray = arrays.SimpleLevelOperations.arr;
  return (
    <>{RenderOperations(simpleLevelOperationsArray, SimpleLevelOperation)}</>
  );
}

export default SimpleLevelOperations;
