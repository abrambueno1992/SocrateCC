import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
// Components
import Controller from "../Controller";
import GridDisplay from "../GridDisplay";

const funcs = require("../GridDisplay");

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Controller>
        <GridDisplay />
      </Controller>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe("Check for rover", () => {
  it("should have the Rover", () => {
    const props = {
      angle: 90
    };
    const rover = "rover.png";

    const action = funcs.Rover(props);
    expect(action).toEqual(
      <div
        className={props.className}
        style={{ transform: `rotate(${props.angle}deg)` }}
      >
        {props.className === "DRover2" ? (
          <img
            style={{
              widht: "85%",
              background: "orange",
              height: "85%",
              transform: `rotate(${-90}deg)`,
              border: "3px solid red"
            }}
            src={rover}
          />
        ) : (
          <img
            style={{
              widht: "85%",
              background: "red",
              height: "85%",
              transform: `rotate(${-90}deg)`,
              border: "3px solid orange"
            }}
            src={rover}
          />
        )}
      </div>
    );
  });
});

describe("check gridDisplay functionality", () => {
  it("should receive proper props", () => {
    const props = {
      angle: 90,
      position: [2, 3],
      xGridNumber: 7,
      yGridNumber: 8,
      angle2: 90,
      position2: [3, 3],
      className: "GridDisplay"
    };
    const action = funcs.gridDisplay(props);
    // number of columns
    const column = 8;

    expect(action.props.children.length).toEqual(column);
    // number of rows
    const row = 7;
    expect(action.props.children[0].props.children.length).toEqual(row);
  });
});
