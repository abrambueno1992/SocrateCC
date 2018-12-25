import React from "react";
import { mount } from "enzyme";
// Root needed for wrapper
import Root from "../../Root";
// Components
import Controller from "../Controller";
import GridDisplay from "../GridDisplay";
import Rover1 "../Rover1";
import Rover2 "../Rover2";

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <Controller />
        </Root>
    )
});

afterEach(() => {
    wrapped.unmount();
})

it('should have a GridDisplay component', () => {
    expect(wrapped.find(GridDisplay).length).toEqual(1);
})

it('should ', () => {
  
})

