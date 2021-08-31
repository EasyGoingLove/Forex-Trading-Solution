import React from "react";

import "./PairBox.css";

type BoxProp = {
  shortName: string;
  fullName:string;
  value: number;
  image:any;
};

const PairBox = (props: BoxProp) => {
  return (
    
      <div className="currency-box">
        <img src={`${props.image}`} alt="curencyImgs"/>
        <p>{props.shortName}</p>
        <p>{props.fullName}</p>
        <p>{props.value}</p>
      </div>
   
  );
};

export default PairBox;
