import { SET_POSITION_R2, EXECUTE_CMD_DIR2 } from "../actions/rover2";
import { SET_POSITION_R1, EXECUTE_CMD_DIR1 } from "../actions/rover1";
import { SET_GRID } from "../actions/controller";
const initialState = {
  // Rover position
  position: [0, 0],
  position2: [0, 0],

  // Grid
  xGrids: 0,
  yGrids: 0,
  grid: null,

  // Clockwise angle
  direction: 90,
  direction2: 90,

  // Counter-clockwise angle
  // needed for CSS transform
  angle: 90,
  angle2: 90,

  // Direction as NSEW
  dir: "N",
  dir2: "N",

  // When the rover was going out of boundary.
  //  Will stop before going out of boundary
  danger: false,

  // the queue of commands from input
  // converted to an array to keep track
  commandQueu: [],
  commandQueu2: [],
  rover: 1
};

const roverStates = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITION_R2:
      return Object.assign({}, state, {
        position2: action.payload.position,
        direction2: action.payload.direction,
        dir2: action.payload.dir,
        angle2: action.payload.angle,
        danger2: action.danger
      });
    case SET_POSITION_R1:
      return Object.assign({}, state, {
        position: action.payload.position,
        direction: action.payload.direction,
        dir: action.payload.dir,
        angle: action.payload.angle,
        // coordinates: action.payload.direction,
        danger: action.danger
      });
    case SET_GRID:
      return Object.assign({}, state, {
        xGrids: action.x,
        yGrids: action.y,
        grid: action.grid
      });

    case EXECUTE_CMD_DIR1:
      return Object.assign({}, state, {
        direction: action.payload.direction,
        dir: action.payload.dir,
        angle: action.payload.angle,
        commandQueu: action.payload.commandQueu,
        danger: action.danger
      });
    case EXECUTE_CMD_DIR2:
      return Object.assign({}, state, {
        direction2: action.payload.direction,
        dir2: action.payload.dir,
        angle2: action.payload.angle,
        commandQueu2: action.payload.commandQueu,
        danger: action.danger
      });
    // return Object.assign({}, state, {

    // })
    default:
      return state;
  }
};

export default roverStates;
