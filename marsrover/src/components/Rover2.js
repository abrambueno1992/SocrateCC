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
  return {};
};

export default connect(
  maptStateToProps,
  { setPosR2 }
)(Rover2);
