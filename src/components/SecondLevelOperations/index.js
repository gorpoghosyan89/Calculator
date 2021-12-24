import React from "react";
import SecondLevelOperation from "./SecondLevelOperation";
import { RenderOperations } from "../../Helpers/utilits";
import { arrays } from "../../data";

function SecondLevelOperations() {
  const secondLevelOperationsArray = arrays.SecondLevelOperations.arr;
  return (
    <>{RenderOperations(secondLevelOperationsArray, SecondLevelOperation)}</>
  );
}

export default SecondLevelOperations;
