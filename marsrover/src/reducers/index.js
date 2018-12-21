import { SET_POSITION_R2 } from "../actions/rover2";
import { SET_POSITION_R1 } from "../actions/rover1";
const initialState = {
  // Rover position
  position1: [],
  position2: [],

  // Grid
  xGrids: 0,
  yGrids: 0,

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
        position2: action.payload,
        danger: action.danger
      });
    case SET_POSITION_R1:
      return Object.assign({}, state, {
        position: action.payload,
        danger: action.danger
      });
    // return Object.assign({}, state, {

    // })
    default:
      return state;
  }
};

export default roverStates;