import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { setPosR2 } from "../actions/rover2";
class Rover2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // input for the position
      inputCoordinates: "",

      // When the rover was going out of boundary.
      //  Will stop before going out of boundary
      danger: false,

      // input for the commands
      inputCommand: ""
    };
  }
  createGrid = () => {
    // Input is a string, so split converts the string to an array
    // the breakpoint is the space between the numbers
    // Split is an array of 2 elements, both elements are strings
    let split = this.state.inputGrid.split(" ");
    if (split.length !== 2)
      window.alert(
        "The grid needs to have an x integer value separated by a space and followed by a y integer value"
      );

    // Both elements of the split array are converted to decimal integers
    // 1 is added because input is the outermost coordinates for x && y
    // matrix starts at 0, so 5 5 would be 4 4, so +1 is needed
    const x = parseInt(split[0], 10) + 1;
    const y = parseInt(split[1], 10) + 1;

    // Make sure x && y are greater than zero and both are integer values
    if (0 <= x && 0 <= y) {
      this.setState({ xGrids: x, yGrids: y });
    } else {
      this.setState({ inputGrid: "" });
      window.alert(
        "The input for the x and y values of the grid need to be integers"
      );
    }
    // this.setCoordinates(this.state.inputCoordinates);
    // this.setCoordinates(this.state.inputCoordinates2, true);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.grid !== this.props.grid) {
      this.createGrid();
    }
  };
  render() {
    return (
      <div>
        <div>
          <span>Rover 2: </span>
          <input
            type="text"
            name="inputCoordinates"
            placeHolder="3 5 N"
            value={this.state.inputCoordinates}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
const maptStateToProps = state => {
  return {
    position: state.position2,

    // Grid
    xGrids: state.xGrids,
    yGrids: state.yGrids,
    grid: state.grid,

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
