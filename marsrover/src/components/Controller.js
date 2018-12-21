import React, { Component } from "react";

// Rover 1 and Rover 2 imports
import Rover1 from "./Rover1";
import Rover2 from ".Rover2";
// redux
import { connect } from "react-redux";

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // grid dimensions
      xGrids: 0,
      yGrids: 0,

      // the grid dimensions from input
      inputGrid: ""
    };
  }
  handleGrid = e => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.name]: value });
    return;
  };

  render() {
    return (
      <div>
        <div>
          <h3>Current positions of Rovers</h3>
          <span>
            Rover 1: (x: {this.state.position[1]}, y:
            {this.state.position[0]}) {this.state.dir}
          </span>
          <span>
            Rover 2: (x: {this.state.position2[1]}, y:
            {this.state.position2[0]}) {this.state.dir2}
          </span>
        </div>
        <div>
          <h3>Enter the max x and y coordinates, space separated: x y</h3>
          <input
            type="text"
            name="inputGrid"
            placeHolder="x y"
            value={this.state.inputGrid}
            onChange={this.handleGrid}
          />
        </div>
        <Rover1 />
        <Rover2 />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // Position of the rovers
    position: state.position,
    position2: state.position2,
    // Grid
    xGrids: state.xGrids,
    yGrids: state.yGrids,

    // Clockwise angle
    direction: state.direction,
    direction2: state.direction2,
    // Counter-clockwise angle
    // needed for CSS transform
    angle: state.angle,
    angle2: state.angle2,
    // Direction as NSEW
    dir: state.dir,
    dir2: state.dir2,
    // When the rover was going out of boundary.
    //  Will stop before going out of boundary
    danger: state.danger,

    // the queue of commands from input
    // converted to an array to keep track
    commandQueu: state.commandQueu,
    commandQueu2: state.commandQueu2
  };
};

export default connect(
  mapStateToProps,
  {}
)(Controller);
