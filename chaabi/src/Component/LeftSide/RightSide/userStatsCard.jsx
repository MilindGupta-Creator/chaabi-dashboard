import React from "react";


import { userStatsArray } from "../../../constants";
const UserStatsCard = () => {
  return (
    <>
      {userStatsArray.map((stats) => {
        return (
          <div className="section-card-wrapper">
            <div className="usercard-container">
              <p className="usercard-title">{stats?.title}</p>
              <div className="usercard-subcontainer">
                <div className="usercard-subcontainer-1">
                  <h3 className="usercard-subcontainer-1-title">{stats?.time}</h3>
                  <div className="usercard-subcontainer-1-body">
                    <p>
                      <img src={stats?.trendUpPercentage} alt="trend" />
                    </p>
                    <p className="usercard-subcontainer-1-body-text">{stats?.trendUpInNumbers}</p>
                  </div>
                </div>
                <div>
                  <img src={stats?.chart} alt="chart" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserStatsCard;
