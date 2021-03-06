import React, { Component } from "react";

// Rover 1 and Rover 2 imports
import Rover1 from "./Rover1";
import Rover2 from "./Rover2";

// GridDisplay import
import GridDisplay from "./GridDisplay";

// redux
import { connect } from "react-redux";
import { setGrid, executeCommands } from "../actions/controller";

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // description of button
      gridButton: "Show Grid",

      // the grid dimensions from input
      inputGrid: "",

      // Display the grid === true by default
      display: false
    };
  }
  handleGrid = e => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ inputGrid: value });
    return;
  };
  createGrid = () => {
    // Input is a string, so split converts the string to an array
    // the breakpoint is the space between the numbers
    // Split is an array of 2 elements, both elements are strings
    let split = this.state.inputGrid.split(" ");
    if (split.length !== 2) {
      window.alert(
        "The grid needs to have an x integer value separated by a space and followed by a y integer value"
      );
      return;
    }

    // Both elements of the split array are converted to decimal integers
    // 1 is added because input is the outermost coordinates for x && y
    // matrix starts at 0, so 5 5 would be 4 4, so +1 is needed
    const x = parseInt(split[0], 10) + 1;
    const y = parseInt(split[1], 10) + 1;

    // Make sure x && y are greater than zero and both are integer values
    if (0 <= x && 0 <= y) {
      this.props.setGrid(x, y);
    } else {
      this.setState({ inputGrid: "" });
      window.alert(
        "The input for the x and y values of the grid need to be integers"
      );
    }
  };
  sendCommands = () => {
    this.props.executeCommands(1);
  };

  handleDisplay = () => {
    if (this.state.display === true) {
      this.setState({ display: !this.state.display, gridButton: "Show Grid" });
    } else {
      this.setState({ display: !this.state.display, gridButton: "Hide Grid" });
    }
  };

  render() {
    return (
      <div>
        {this.state.display === false ? (
          <div className="GridDisplay" />
        ) : (
          <GridDisplay
            angle={this.props.angle}
            position={this.props.position}
            xGridNumber={this.props.xGrids}
            yGridNumber={this.props.yGrids}
            angle2={this.props.angle2}
            position2={this.props.position2}
            className="GridDisplay"
          />
        )}
        {this.props.grid !== null ? (
          <button onClick={this.handleDisplay}>{this.state.gridButton}</button>
        ) : null}

        <div className="Coordinates">
          <h5 className="CHeader">
            Enter the max x and y coordinates, space separated: x y
          </h5>

          <input
            type="text"
            name="inputGrid"
            placeHolder="x y"
            className="inputGrid"
            value={this.state.inputGrid}
            onChange={this.handleGrid}
          />
        </div>

        <div>
          <Rover1 />
          <Rover2 />
          {this.props.grid !== null ? (
            <div className="Position">
              <h3>Current positions of Rovers</h3>
              <span className="CurrentPosition1">
                Rover 1: (x: {this.props.position[1]}, y:
                {this.props.position[0]}) {this.props.dir}
              </span>
              <span className="CurrentPosition2">
                Rover 2: (x: {this.props.position2[1]}, y:
                {this.props.position2[0]}) {this.props.dir2}
              </span>
            </div>
          ) : null}

          <button className="inputGridBtn" onClick={this.createGrid}>
            Create Grid
          </button>
        </div>
        <button className="sendCommands" onClick={this.sendCommands}>
          Send Commands
        </button>
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
    grid: state.grid,

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
  { setGrid, executeCommands }
)(Controller);
