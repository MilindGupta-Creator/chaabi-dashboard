import React from "react";
import logo from "../../assets/logo.jpg";
import location from "../../assets/Location.png";
import Users from "../../assets/Users.png";
import training from "../../assets/training.png";
import "./LeftSide.css";

const LeftSide = () => {
  const data = [
    {
      pic: training,
      title: "Dashboard",
    },
    {
      pic: training,
      title: "Training",
    },
    {
      pic: Users,
      title: "Users",
    },
    {
      pic: location,
      title: "Analytics",
    },
    {
      pic: location,
      title: "My Accounts",
    },
    {
      pic: location,
      title: "Support",
    },
  ];

  return (
    <div className="left-container">
      <div className="logo-head">
        <img src={logo} alt="logo" />
        <div  className="black-line" />
      </div>
      <div className="container-bottom">
        <ul>
        {data.map((item, index) => (
            <li
              key={index}
              className={index === 0 ? "first-item" : ""}
            >
              <img src={item.pic} alt={item.title} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
