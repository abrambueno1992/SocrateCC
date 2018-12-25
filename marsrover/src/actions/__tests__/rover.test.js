import {
  SET_POSITION_R1,
  EXECUTE_CMD_DIR1,
  EXECUTE_CMD_MV1,
  SET_POSITION_R2,
  EXECUTE_CMD_DIR2,
  EXECUTE_CMD_MV2,
  setPosR,
  executeCMDdir,
  executeCMDmv
} from "../rover";

describe("setPosR1", () => {
  it("has the correct type", () => {
    // rover 1 flag === 1
    const action = setPosR({}, 1);
    expect(action.type).toEqual(SET_POSITION_R1);

    // rover 2 flag === 2
    const action2 = setPosR({}, 2);
    expect(action2.type).toEqual(SET_POSITION_R2);
  });

  it("has the correct payload", () => {
    const state = {};
    state.direction = 90;
    state.dir = "N";
    state.angle = 90;
    state.position = [3, 3];

    // rover 1 flag === 1
    const action = setPosR(state, 1);
    expect(action.type).toEqual(SET_POSITION_R1);
    expect(action.payload.direction).toEqual(90);
    expect(action.payload.dir).toEqual("N");
    expect(action.payload.angle).toEqual(90);
    expect(action.payload.position).toEqual([3, 3]);

    // rover 2 flag === 2
    const action2 = setPosR(state, 2);
    expect(action2.type).toEqual(SET_POSITION_R2);
    expect(action2.payload.direction).toEqual(90);
    expect(action2.payload.dir).toEqual("N");
    expect(action2.payload.angle).toEqual(90);
    expect(action2.payload.position).toEqual([3, 3]);
  });
});

describe("executeCMDdir", () => {
  it("has the correct type", () => {
    // rover 1 flag === 1
    const action = executeCMDdir({}, 1);
    expect(action.type).toEqual(EXECUTE_CMD_DIR1);

    const action2 = executeCMDdir({}, 2);
    expect(action2.type).toEqual(EXECUTE_CMD_DIR2);
  });

  it("has the correct payload", () => {
    // rover 1 flag === 1
    const action = executeCMDdir(
      {
        direction: 90,
        dir: "W",
        angle: 0,
        commandQueu: ["M", "M", "R"],
        execute: 1
      },
      1
    );

    expect(action.type).toEqual(EXECUTE_CMD_DIR1);
    expect(action.payload.direction).toEqual(90);
    expect(action.payload.dir).toEqual("W");
    expect(action.payload.angle).toEqual(0);
    expect(action.payload.commandQueu).toEqual(["M", "M", "R"]);
    expect(action.payload.execute).toEqual(1);

    // rover 2 flag === 2
    const action2 = executeCMDdir(
      {
        direction: 90,
        dir: "W",
        angle: 0,
        commandQueu: ["M", "M", "R"],
        execute: 1
      },
      2
    );

    expect(action2.type).toEqual(EXECUTE_CMD_DIR2);
    expect(action2.payload.direction).toEqual(90);
    expect(action2.payload.dir).toEqual("W");
    expect(action2.payload.angle).toEqual(0);
    expect(action2.payload.commandQueu).toEqual(["M", "M", "R"]);
    expect(action2.payload.execute).toEqual(1);
  });
});

describe("executeCMDmv", () => {
  it("has the correct type", () => {
    const action = executeCMDmv({}, 1);
    expect(action.type).toEqual(EXECUTE_CMD_MV1);

    const action2 = executeCMDmv({}, 2);
    expect(action2.type).toEqual(EXECUTE_CMD_MV2);
  });

  it("has the correct payload", () => {
    const action = executeCMDmv(
      {
        position: [3, 3],
        commandQueu: ["M", "M", "R"],
        execute: 1
      },
      1
    );
    expect(action.type).toEqual(EXECUTE_CMD_MV1);
    expect(action.payload.position).toEqual([3, 3]);
    expect(action.payload.commandQueu).toEqual(["M", "M", "R"]);
    expect(action.payload.execute).toEqual(1);

    const action2 = executeCMDmv(
      {
        position: [3, 3],
        commandQueu: ["M", "M", "R"],
        execute: 1
      },
      2
    );
    expect(action2.type).toEqual(EXECUTE_CMD_MV2);
    expect(action2.payload.position).toEqual([3, 3]);
    expect(action2.payload.commandQueu).toEqual(["M", "M", "R"]);
    expect(action2.payload.execute).toEqual(1);
  });
});
