export const SET_GRID = "SET_GRID";
export const EXECUTE_COMMANDS = "EXECUTE_COMMANDS";

export const setGrid = (x, y) => ({
  type: SET_GRID,
  x: x,
  y: y,
  grid: true
});

export const executeCommands = () => ({
  type: EXECUTE_COMMANDS,
  payload: true
});
