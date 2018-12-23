import {
  SET_GRID,
  setGrid,
  EXECUTE_COMMANDS,
  executeCommands
} from "../controller";

describe("setGrid", () => {
  it("has the correct type", () => {
    const action = setGrid();
    expect(action.type).toEqual(SET_GRID);
  });

  it("has the correct payload", () => {
    const action = setGrid(3, 5);
    expect(action.x).toEqual(3);
    expect(action.y).toEqual(5);
    expect(action.grid).toEqual(true);
  });
});
