import React from "react";
import { arrays } from "../data";

export const RenderOperations =(arr,Component,setCurrentValue)=>{
  return(
        <div className="d-flex flex-wrap">
        {arr.map((el,index) => {
          return <Component key={index} item={el} className={arrays} setCurrentValue={setCurrentValue}/>;
        })}
      </div>  
    )
}