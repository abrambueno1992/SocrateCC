import React from "react";
import "./GridDisplay.css";
import "./Grid.css";
import rover from "../rover.png";
export const Rover = props => {
  return (
    <div
      className={props.className}
      style={{ transform: `rotate(${props.angle}deg)` }}
    >
      <img
        style={{ widht: "85%", height: "85%", transform: `rotate(${-90}deg)` }}
        src={rover}
      />
    </div>
  );
};

export const gridDisplay = props => {
  const { xGridNumber, yGridNumber } = props;

  const xGrids = [];

  const yGrids = [];
  for (let i = 0; xGridNumber > i; i++) {
    xGrids.push(i);
  }
  for (let i = 0; yGridNumber > i; i++) {
    yGrids.push(i);
  }
  const xPos = props.position[0];
  const yPos = props.position[1];
  const xPos2 = props.position2[0];
  const yPos2 = props.position2[1];

  return (
    <div className="what">
      {yGrids
        .slice(0)
        .reverse()
        .map(row => {
          return (
            <div className="column">
              {xGrids.map((column, x, total) => {
                if (row === xPos && yPos === column)
                  return (
                    <Rover
                      className="DRover1"
                      // style={{ height: "3em" }}
                      angle={props.angle}
                      key={column + x}
                    />
                  );
                if (row === xPos2 && column === yPos2) {
                  return (
                    <Rover
                      className="DRover2"
                      style={{ height: "3em" }}
                      angle={props.angle2}
                      key={column + x}
                    />
                  );
                }
                return <div key={column + x} className="row" />;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default gridDisplay;
