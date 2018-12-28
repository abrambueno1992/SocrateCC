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

export const directionLogic = (currentDir, split, end) => {
  if (currentDir === 90) {
    // this.props.executeCMDdir(
    return {
      direction: currentDir,
      dir: "N",
      angle: 90,
      commandQueu: split,
      execute: end
    };
    //   1
    // );
  } else if (currentDir === 180) {
    // this.props.executeCMDdir(
    return {
      direction: currentDir,
      dir: "W",
      angle: 0,
      commandQueu: split,
      execute: end
    };
    //   1
    // );
  } else if (currentDir === 270) {
    // this.props.executeCMDdir(
    return {
      direction: currentDir,
      dir: "S",
      angle: 270,
      commandQueu: split,
      execute: end
    };
    //   1
    // );
  } else {
    // this.props.executeCMDdir(
    return {
      direction: currentDir,
      dir: "E",
      angle: 180,
      commandQueu: split,
      execute: end
    };
    //   1
    // );
  }
};
