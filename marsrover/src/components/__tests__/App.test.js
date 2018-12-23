import React from "react";
import App from "../../App";
import { shallow } from "enzyme";
import Controller from "../Controller";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a controller component", () => {
  expect(wrapped.find(Controller).length).toEqual(1);
});
