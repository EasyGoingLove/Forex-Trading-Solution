import React from "react";

import "./PairBox.css";

type BoxProp = {
  shortName: string;
  fullName:string;
  value: number;
};

const PairBox = (props: BoxProp) => {
  return (
    <div className="currency-container">
      <div className="currency-box">
        <p>{props.shortName}</p>
        <p>{props.fullName}</p>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default PairBox;
