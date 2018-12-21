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
  handleChange = e => {
    e.preventDefault();
    let value = e.target.value.toUpperCase();
    let split = value.split("");
    if (
      split[split.length - 1] === "L" ||
      split[split.length - 1] === "R" ||
      split[split.length - 1] === "M" ||
      split[split.length - 1] === undefined
    ) {
      this.setState({ [e.target.name]: value });
    }
    if (e.target.name === "inputCoordinates") {
      console.log("value of coordinates", value, this.state.inputCoordinates);
      this.setState({ [e.target.name]: value });
    }

    return;
  };
  setCoordinates = () => {
    let coordinates = this.state.inputCoordinates.split(" ");
    if (coordinates.length !== 3) {
      window.alert(
        "The coordinates needs an x integer separated by a space, followed by a y integer separated by another space, and finally a direction N,S,E, or W"
      );
    }
    const xCoor = parseInt(coordinates[1], 10);
    const yCoor = parseInt(coordinates[0], 10);
    const pDir = coordinates[2].toUpperCase();
    const state = {};
    console.log("SET coordinates FIRED", xCoor, yCoor, pDir, state);

    if (0 <= xCoor && 0 <= yCoor) {
      if (pDir === "N" || pDir === "S" || pDir === "E" || pDir === "W") {
        // this.setState({ dir: pDir, position: [xCoor, yCoor], coordinates: "" });
        if (pDir === "N") {
          state.direction = 90;
          state.dir = "N";
          state.angle = 90;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR2(state);

          this.setState({ inputCoordinates: "" });
        } else if (pDir === "W") {
          state.direction = 180;
          state.dir = "W";
          state.angle = 0;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR2(state);
          this.setState({ inputCoordinates: "" });
        } else if (pDir === "S") {
          state.direction = 270;
          state.dir = "S";
          state.angle = 270;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR2(state);
          this.setState({ inputCoordinates: "" });
        } else {
          state.direction = 0;
          state.dir = "E";
          state.angle = 180;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR2(state);
          this.setState({ inputCoordinates: "" });
        }
      } else {
        this.setState({ coordinates: "" });
        window.alert("The direction needs to be N, S, E or W");
      }
    } else {
      this.setState({ coordinates: "" });
      window.alert("The coordinates need to be integers for both x and y");
    }
    console.log("Created grid, these are the dimensions", xCoor, yCoor, pDir);
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.grid !== this.props.grid) {
      this.setCoordinates();
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
