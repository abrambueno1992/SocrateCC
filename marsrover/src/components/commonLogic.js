export const coordinateLogic = (pDir, xCoor, yCoor) => {
  const state = {};
  if (pDir === "N") {
    state.direction = 90;
    state.dir = "N";
    state.angle = 90;
    state.position = [xCoor, yCoor];
    state.coordinates = "";
    // this.props.setPosR(state, 1);
    return state;
  } else if (pDir === "W") {
    state.direction = 180;
    state.dir = "W";
    state.angle = 0;
    state.position = [xCoor, yCoor];
    state.coordinates = "";
    // this.props.setPosR(state, 1);
    return state;
  } else if (pDir === "S") {
    state.direction = 270;
    state.dir = "S";
    state.angle = 270;
    state.position = [xCoor, yCoor];
    state.coordinates = "";
    // this.props.setPosR(state, 1);
    return state;
  } else {
    state.direction = 0;
    state.dir = "E";
    state.angle = 180;
    state.position = [xCoor, yCoor];
    state.coordinates = "";
    // this.props.setPosR(state, 1);
    return state;
  }
};
