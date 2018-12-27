import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { setPosR, executeCMDdir, executeCMDmv } from "../actions/rover";
import { executeCommands } from "../actions/controller";
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

    if (0 <= xCoor && 0 <= yCoor) {
      if (pDir === "N" || pDir === "S" || pDir === "E" || pDir === "W") {
        if (pDir === "N") {
          state.direction = 90;
          state.dir = "N";
          state.angle = 90;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR(state, 2);
        } else if (pDir === "W") {
          state.direction = 180;
          state.dir = "W";
          state.angle = 0;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR(state, 2);
        } else if (pDir === "S") {
          state.direction = 270;
          state.dir = "S";
          state.angle = 270;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR(state, 2);
        } else {
          state.direction = 0;
          state.dir = "E";
          state.angle = 180;
          state.position = [xCoor, yCoor];
          state.coordinates = "";
          this.props.setPosR(state, 2);
        }
      } else {
        this.setState({ coordinates: "" });
        window.alert("The direction needs to be N, S, E or W");
      }
    } else {
      this.setState({ coordinates: "" });
      window.alert("The coordinates need to be integers for both x and y");
    }
  };
  sendCommands = e => {
    let each;
    const split = [];

    let splitTemp =
      this.state.inputCommand !== ""
        ? this.state.inputCommand.split("")
        : this.props.commandQueu.map(each => each);
    splitTemp.forEach(each => split.push(each));
    each = split[0];
    split.shift();
    this.setState({ inputCommand: "" });
    const end = split.length === 0 ? 1 : 0;
    if (each !== "M") {
      let currentDir = this.props.direction;
      let change = each === "L" ? 90 : 270;
      currentDir += change;
      if (change === 270) {
        if (currentDir >= 360) {
          currentDir -= 360;
        } else {
        }
      }
      currentDir = currentDir === 360 ? 0 : currentDir;
      if (currentDir === 90) {
        this.props.executeCMDdir(
          {
            direction: currentDir,
            dir: "N",
            angle: 90,
            commandQueu: split,
            execute: end
          },
          2
        );
      } else if (currentDir === 180) {
        this.props.executeCMDdir(
          {
            direction: currentDir,
            dir: "W",
            angle: 0,
            commandQueu: split,
            execute: end
          },
          2
        );
      } else if (currentDir === 270) {
        this.props.executeCMDdir(
          {
            direction: currentDir,
            dir: "S",
            angle: 270,
            commandQueu: split,
            execute: end
          },
          2
        );
      } else {
        this.props.executeCMDdir(
          {
            direction: currentDir,
            dir: "E",
            angle: 180,
            commandQueu: split,
            execute: end
          },
          2
        );
      }
    } else {
      this.handleMove(split);
    }
  };
  handleMove = split => {
    const end = split.length === 0 ? 1 : 0;
    // direction held in state dir... default dir = "N"
    let direction = this.props.dir;

    // position = (y, x) ... values starting at (0,0)
    let x = this.props.position[1];
    let y = this.props.position[0];

    // Dimension of the grid held in state xGrids and yGrids
    // default dimension is 0 by 0
    const { xGrids, yGrids } = this.props;
    if (direction === "N") {
      y += 1;
    } else if (direction === "S") {
      y -= 1;
    } else if (direction === "E") {
      x += 1;
    } else {
      x -= 1;
    }

    // Make sure x and y are not out of boundary, below 0 0
    if (x < 0 || y < 0) {
      this.setState({ danger: true });
      return;
    }

    // Make sure x && y are not out of boundary, xGrids && yGrids are maximum
    if (x >= xGrids || y >= yGrids) {
      this.setState({ danger: true });
      return;
    }

    // position = (y, x) ... values starting at (0,0)
    this.props.executeCMDmv(
      {
        position: [y, x],
        commandQueu: split,
        execute: end
      },
      2
    );
  };
  cancelCommands = () => {
    this.props.executeCommands(0);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.grid !== this.props.grid) {
      this.setCoordinates();
    }
    if (prevProps.execute !== this.props.execute) {
      if (this.props.execute === 2 && this.state.inputCommand !== "") {
        this.sendCommands();
      } else if (this.props.execute === 2) {
        this.cancelCommands();
      } else {
      }
    }
    if (
      prevProps.commandQueu !== this.props.commandQueu &&
      this.props.execute === 2
    ) {
      this.sendCommands();
    }
  };
  render() {
    return (
      <div>
        <div>
          <h3>Rover 2: </h3>
          <h5>
            Enter the coordinates of the rover: x y direction. x and y are
            integers, direction = N,S,E,W
          </h5>
          <input
            type="text"
            name="inputCoordinates"
            className="inputCoordinates"
            placeHolder="3 5 N"
            value={this.state.inputCoordinates}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <h6>
            Enter instructions for rover, sequential non-space separated (L =
            left, R = right, M = move): LRM
          </h6>
          <input
            type="text"
            name="inputCommand"
            className="inputCommand"
            placeHolder="LMLMLMLMM"
            value={this.state.inputCommand}
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
    commandQueu: state.commandQueu2,
    execute: state.execute
  };
};

export default connect(
  maptStateToProps,
  { setPosR, executeCMDdir, executeCMDmv, executeCommands }
)(Rover2);
