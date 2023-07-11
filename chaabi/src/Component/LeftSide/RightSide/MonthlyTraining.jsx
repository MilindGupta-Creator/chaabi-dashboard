import React from "react";
import UpArrow from "../../../assets/Arrow - Up.svg";
import { courseList } from "../../../constants";;
const MonthlyTraining = () => {
  return (
    <div className="monthly-training-container">
      <h5 className="monthly-training-title">Monthly Training Activity</h5>
      <div className="monthly-training-subContainer1">
        <img src={UpArrow} alt="upp arrow" />
        <p className="monthly-training-subtitle">
          16% more enrollees this month
        </p>
      </div>

      <div className="monthly-training-subContainer2">
        {courseList.map((course, index) => {
          return (
            <div className="monthly-training-course-container">
              <div className="list-custom-dot-2"></div>
              <div>
                <p className="monthly-training-course-container-course">
                  {course?.name}
                </p>
                <p className="monthly-training-course-container-course-description">
                  {course?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyTraining;
