import React from "react";

import "./PairBox.css";

type BoxProp = {
  shortName: string;
  fullName: string;
  value: string;
  image: any;
  valueStyle:string;
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
      <p  className={`values ${props.valueStyle==='green' ? 'green' : props.valueStyle==='' ? '' :'red'} `}>{props.value}</p>
      </div>
     
    </div>
  );
};

export default PairBox;
