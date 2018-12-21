import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { setPosR2 } from "../actions/rover2";
class Rover2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // rover position
      position: [0, 0],
      inputCoordinates: "",

      // Clockwise angle
      direction: 90,

      // Counter-clockwise angle
      // needed for CSS transform
      angle: 90,

      // Direction as NSEW
      dir: "N",
      // When the rover was going out of boundary.
      //  Will stop before going out of boundary
      danger: false,

      // input for the commands
      inputCommand: "",

      // the queue of commands from input
      // converted to an array to keep track
      commandQueu: []
    };
  }
  render() {
    return <div />;
  }
}
const maptStateToProps = state => {
  return {
    position: state.position2,

    // Grid
    xGrids: state.xGrids,
    yGrids: state.yGrids,

    // Clockwise angle
    direction: state.direction2,

    // Counter-clockwise angle
    // needed for CSS transform
    angle: state.angle2,

    // Direction as NSEW
    dir: state.dir2,

    // When the rover was going out of boundary.
    //  Will stop before going out of boundary
    danger: state.danger,

    // the queue of commands from input
    // converted to an array to keep track
    commandQueu: state.commandQueu2
  };
};

export default connect(
  maptStateToProps,
  { setPosR2 }
)(Rover2);
