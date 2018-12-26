import React from "react";
import { mount } from "enzyme";
// Root needed for wrapper
import Root from "../../Root";
// Components
import Controller from "../Controller";
import GridDisplay from "../GridDisplay";
import Rover1 from "../Rover1";
import Rover2 from "../Rover2";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Controller />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should have a GridDisplay component", () => {
  expect(wrapped.find(GridDisplay).length).toEqual(1);
});

it("should have Rover 1 and Rover 2 ", () => {
  expect(wrapped.find(Rover1).length).toEqual(1);
  expect(wrapped.find(Rover2).length).toEqual(1);
});

describe("the text input", () => {
  beforeEach(() => {
    wrapped.find("input.inputGrid").simulate("change", {
      target: { value: "6 7" }
    });
    wrapped.update();
  });
  it("should have an input that users can type in", () => {
    expect(wrapped.find("input.inputGrid").prop("value")).toEqual("6 7");
  });

  it("when submitting grid input, the xGrids and yGrids state gets updated ", () => {
    wrapped.find("button.inputGrid").simulate("submit");
    wrapped.update();
    console.log("Props are", wrapped.find("state"));

    // expect(wrapped.find("").prop("xGrids")).toEqual("6");
  });
});
