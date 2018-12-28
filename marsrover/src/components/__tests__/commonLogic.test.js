const funcs = require("../commonLogic");

describe("should return updated coordinates", () => {
  it("should return the proper logical coordinates", () => {
    let pDir = "W";
    let xCoor = 3;
    let yCoor = 5;
    const state = {};
    state.direction = 180;
    state.dir = "W";
    state.angle = 0;
    state.position = [xCoor, yCoor];
    state.coordinates = "";
    // pDir === "W"
    const action = funcs.coordinateLogic(pDir, xCoor, yCoor);
    expect(action).toEqual(state);

    // pDir === "N"
    pDir = "N";
    state.dir = "N";
    state.angle = 90;
    state.direction = 90;
    const action2 = funcs.coordinateLogic(pDir, xCoor, yCoor);
    expect(action2).toEqual(state);

    // pDir === "S"
    pDir = "S";
    state.dir = "S";
    state.angle = 270;
    state.direction = 270;
    const action3 = funcs.coordinateLogic(pDir, xCoor, yCoor);
    expect(action3).toEqual(state);

    // pDir === "E"
    pDir = "E";
    state.dir = "E";
    state.angle = 180;
    state.direction = 0;
    const action4 = funcs.coordinateLogic(pDir, xCoor, yCoor);
    expect(action4).toEqual(state);
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
