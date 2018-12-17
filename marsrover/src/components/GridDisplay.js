import React from "react";

const Rover = props => {
  return (
    <div className="rover" style={{ transform: `rotate(${props.angle}deg)` }}>
      <div className="head">Head</div>
    </div>
  );
};

const gridDisplay = props => {
  return (
    <div>
      <Rover angle={props.angle} />
    </div>
  );
};

export default gridDisplay;
