import {
  SET_POSITION_R1,
  setPosR1,
  EXECUTE_CMD_DIR1,
  executeCMDdir1,
  EXECUTE_CMD_MV1,
  executeCMDmv1
} from "../rover1";

describe("setPosR1", () => {
  it("has the correct type", () => {
    const action = setPosR1();
    expect(action.type).toEqual(SET_POSITION_R1);
  });

  it("has the correct payload", () => {
    const state = {};
    state.direction = 90;
    state.dir = "N";
    state.angle = 90;
    state.position = [3, 3];
    const action = setPosR1(state);
    expect(action.payload.direction).toEqual(90);
    expect(action.payload.dir).toEqual("N");
    expect(action.payload.angle).toEqual(90);
    expect(action.payload.position).toEqual([3, 3]);
  });
});

describe("executeCMDdir1", () => {
  it("has the correct type", () => {
    const action = executeCMDdir1();
    expect(action.type).toEqual(EXECUTE_CMD_DIR1);
  });

  it("has the correct payload", () => {
    const action = executeCMDdir1({
      direction: 90,
      dir: "W",
      angle: 0,
      commandQueu: ["M", "M", "R"],
      execute: 1
    });

    expect(action.payload.direction).toEqual(90);
    expect(action.payload.dir).toEqual("W");
    expect(action.payload.angle).toEqual(0);
    expect(action.payload.commandQueu).toEqual(["M", "M", "R"]);
    expect(action.payload.execute).toEqual(1);
  });
});
describe("executeCMDmv1", () => {
  it("has the correct type", () => {
    const action = executeCMDmv1();
    expect(action.type).toEqual(EXECUTE_CMD_MV1);
  });

  it("has the correct payload", () => {
    const action = executeCMDmv1({
      position: [3, 3],
      commandQueu: ["M", "M", "R"],
      execute: 1
    });
    expect(action.payload.position).toEqual([3, 3]);
    expect(action.payload.commandQueu).toEqual(["M", "M", "R"]);
    expect(action.payload.execute).toEqual(1);
  });
});
