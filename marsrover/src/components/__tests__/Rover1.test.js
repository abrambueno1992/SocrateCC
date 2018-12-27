import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
// Components
import Rover1 from "../Rover1";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Rover1 />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should have input for inputCoordinates and  inputCommand", () => {
  expect(wrapped.find(".inputCoordinates").length).toEqual(1);
  expect(wrapped.find(".inputCommand").length).toEqual(1);
});

describe("the text input", () => {
  beforeEach(() => {
    wrapped.find(".inputCoordinates").simulate("change", {
      target: {
        value: "6 7",
        name: "inputCoordinates"
      }
    });
    wrapped.update();
  });
  it("should have an input that users can type in", () => {
    expect(wrapped.find(".inputCoordinates").prop("value")).toEqual("6 7");
  });
});

describe("the text input for commands", () => {
  beforeEach(() => {
    wrapped.find(".inputCoordinates").simulate("change", {
      target: { value: "LRRRMMMLRLRM", name: "inputCoordinates" }
    });
    wrapped.update();
  });
  it("should have an input that users can type in", () => {
    expect(wrapped.find(".inputCoordinates").prop("value")).toEqual(
      "LRRRMMMLRLRM"
    );
  });
});
