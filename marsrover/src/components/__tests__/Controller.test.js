import React from "react";
import { mount } from "enzyme";
import Controller from "../Controller";
import Root from "../../Root";

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <Controller />
        </Root>
    )
});