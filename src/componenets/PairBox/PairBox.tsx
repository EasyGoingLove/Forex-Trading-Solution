import React from "react";

import "./PairBox.css";

type BoxProp = {
  shortName: string;
  fullName: string;
  value: number;
  image: any;
};

const PairBox = (props: BoxProp) => {
  return (
    <div className="currency-box">
      <img className="pair-image" src={`${props.image}`} alt="curencyImgs" />
      <div className="names-container">
        <p className="short-name">{props.shortName}</p>
        <p className="full-name">{props.fullName}</p>
      </div>
      <div className="value-conainer">
      <p className="values">{props.value}</p>
      </div>
     
    </div>
  );
};

export default PairBox;
