const funcs = require("../commonLogic");

describe("should return updated coordinates", () => {
  it("should return the proper logic", () => {
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
