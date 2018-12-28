const funcs = require("../commonLogic");

describe("should return updated coordinates", () => {
  it("should return the proper logical coordinates", () => {
    const pDir = "W";
    const xCoor = 3;
    const yCoor = 5;
    const state = {};
    state.direction = 180;
    state.dir = "W";
    state.angle = 0;
    state.position = [xCoor, yCoor];
    state.coordinates = "";
    const action = funcs.coordinateLogic(pDir, xCoor, yCoor);
    expect(action).toEqual(state);
  });
});

describe("should return updated direction", () => {
  it("should return the proper logical direction", () => {
    const currentDir = 90;
    const split = ["M", "M", "R"];
    const end = 1;
    const state = {
      direction: currentDir,
      dir: "N",
      angle: 90,
      commandQueu: split,
      execute: end
    };
    const action = funcs.directionLogic(currentDir, split, 1);
    expect(action).toEqual(state);
  });
});
