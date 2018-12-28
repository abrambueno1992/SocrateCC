import React from "react";
import { mount } from "enzyme";
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
      <Controller>
        <GridDisplay
          angle={90}
          position={[5, 2]}
          xGridNumber={7}
          yGridNumber={8}
          angle2={90}
          position2={(6, 7)}
          className="GridDisplay"
        />
        {/* <Rover1 />
        <Rover2 /> */}
      </Controller>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should have input for inputCoordinates and  inputCommand", () => {
  expect(wrapped.find(".what").length).toEqual(1);
  // expect(wrapped.find(".column").length).toEqual(1);
  console.log(wrapped.props());
});

// describe("the text input", () => {
//   beforeEach(() => {
//     wrapped.find("input.inputGrid").simulate("change", {
//       target: { value: "6 7" }
//     });
//     wrapped.update();
//   });
//   it("should have an input that users can type in", () => {
//     expect(wrapped.find(".inputGrid").prop("value")).toEqual("6 7");
//   });

//   it("should not clear inputGrid value", () => {
//     wrapped.find("button.inputGridBtn").simulate("submit");
//     wrapped.update();
//     expect(wrapped.find("input.inputGrid").prop("value")).toEqual("6 7");
//   });
// });

// describe("the text input", () => {
//   beforeEach(() => {
//     wrapped.find(".inputCoordinates").simulate("change", {
//       target: {
//         value: "6 7",
//         name: "inputCoordinates"
//       }
//     });
//     wrapped.update();
//   });
//   it("should have an input that users can type in", () => {
//     expect(wrapped.find(".inputCoordinates").prop("value")).toEqual("6 7");
//   });
// });
