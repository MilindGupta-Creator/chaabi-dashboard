import React from "react";
import CircularChart from "../../../assets/Frame 37.png";
import { chapterwiseStatusList } from "../../../constants";
const ChapterWiseStatus = () => {
  return (
    <div className="chaperWiseStatus-container">
      <p className="chaperWiseStatus-title">Chapter Wise Status</p>
      <div>
        <img src={CircularChart} alt="circular chart" />
      </div>
      <ul className="chaperWiseStatus-listitem">
        {chapterwiseStatusList.map((list) => {
          return (
            <li>
              <div
                className="list-custom-dot"
                style={{ backgroundColor: list?.bulletColor }}
              ></div>
              {list?.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChapterWiseStatus;
