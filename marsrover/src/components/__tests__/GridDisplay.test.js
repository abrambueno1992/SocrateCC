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

it("should have input for inputCoordinates and  inputCommand", () => {
  expect(wrapped.find(".what").length).toEqual(1);
});

describe("Check for rover", () => {
  it("should have the Rover", () => {
    const object = {
      angle: 90
    };
    const rover = "rover.png";

    const action = funcs.Rover(object);
    expect(action).toEqual(
      <div
        className="rover"
        style={{ transform: `rotate(${object.angle}deg)` }}
      >
        <img
          style={{
            widht: "85%",
            height: "85%",
            transform: `rotate(${-90}deg)`
          }}
          src={rover}
        />
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
