import React from "react";
import "./GridDisplay.css";
const Rover = props => {
  return (
    <div className="rover" style={{ transform: `rotate(${props.angle}deg)` }}>
      <div className="head">Head</div>
    </div>
  );
};

const gridDisplay = props => {
  const xGrids = [];

  const yGrids = [];
  for (let i = 0; 12 > i; i++) {
    xGrids.push(i);
  }
  for (let i = 0; 10 > i; i++) {
    yGrids.push(i);
  }
  const xPos = props.position[0];
  const yPos = props.position[1];
  return (
    <div>
      <Rover angle={props.angle} />

      {xGrids.map(row => {
        return (
          <div>
            {yGrids.map(column => {
              return <div className="grid" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default gridDisplay;
