import React from "react";
import "./section.css";
import SectionHeader from "./SectionHeader";
import SectionBody from "./SectionBody";
const Section = () => {
  return (
  <div className="section-container">
  <SectionHeader/>
  <SectionBody/>
  </div>
  );
};

export default Section;
