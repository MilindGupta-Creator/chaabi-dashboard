import React from "react";
import "./SmallBox.css";
import boxIcon from "../../assets/boxIcon.svg"
const SmallBox = ({ number }) => {
  return (
    <div className="box-container">
      <img src={boxIcon} alt="general data" />
      <p>20%</p>
    </div>
  );
};

export default SmallBox;
