import React, { Component } from "react";
import "./Grid.css";
import GridDisplay from "./GridDisplay";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // rover position
      position: [0, 0],
      position2: [0, 0],
      inputCoordinates: "",
      inputCoordinates2: "",

      // grid dimensions
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

      // input for the commands
      inputCommand: "",
      inputCommand2: "",

      // the queue of commands from input
      // converted to an array to keep track
      commandQueu: [],
      commandQueu2: [],

      // the grid dimensions from input
      inputGrid: ""
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
    if (
      e.target.name === "inputCoordinates" ||
      e.target.name === "inputCoordinates2"
    ) {
      console.log("value of coordinates", value, this.state.inputCoordinates);
      this.setState({ [e.target.name]: value });
    }

    return;
  };
  handleGrid = e => {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.name]: value });
    return;
  };
  handleRotation = e => {
    let currentDir = this.state.direction;
    let change = e.target.name === "Ldirection" ? 90 : 270;
    currentDir += change;
    if (change === 270) {
      if (currentDir >= 360) {
        currentDir -= 360;
      } else {
      }
    }
    currentDir = currentDir === 360 ? 0 : currentDir;

    // Angle transformation from regular angles (0 at the right, counter clockwise)
    // to transform angles (0 at the left, clockwise)...
    // 360 => 180 ... complete revolution
    // 270 => 270
    // 180 => 0
    // 90 => 90
    // 0 || 360 => 180
    // angle === counter clockwise dir needed for transform functionality
    // direction === clockwise dir, the usual.
    if (currentDir === 90) {
      this.setState({ direction: currentDir, dir: "N", angle: 90 });
    } else if (currentDir === 180) {
      this.setState({ direction: currentDir, dir: "W", angle: 0 });
    } else if (currentDir === 270) {
      this.setState({ direction: currentDir, dir: "S", angle: 270 });
    } else {
      this.setState({ direction: currentDir, dir: "E", angle: 180 });
    }
  };

  handleMove = () => {
    // direction held in state dir... default dir = "N"
    let direction = this.state.dir;

    // position = (y, x) ... values starting at (0,0)
    let x = this.state.position[1];
    let y = this.state.position[0];

    // Dimension of the grid held in state xGrids and yGrids
    // default dimension is 0 by 0
    const { xGrids, yGrids } = this.state;
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
    this.setState({ position: [y, x], danger: false });
  };
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
    this.setCoordinates(this.state.inputCoordinates);
    this.setCoordinates(this.state.inputCoordinates2, true);
  };

  setCoordinates = (inputCoordinates, flag) => {
    let coordinates = inputCoordinates.split(" ");
    if (coordinates.length !== 3) {
      window.alert(
        "The coordinates needs an x integer separated by a space, followed by a y integer separated by another space, and finally a direction N,S,E, or W"
      );
    }
    const xCoor = parseInt(coordinates[1], 10);
    const yCoor = parseInt(coordinates[0], 10);
    const pDir = coordinates[2].toUpperCase();
    const stateOne = {
      direction: 270,
      dir: "S",
      angle: 270,
      position: [xCoor, yCoor],
      coordinates: ""
    };

    const stateTwo = {
      direction2: 90,
      dir2: "N",
      angle2: 90,
      position2: [xCoor, yCoor],
      coordinates2: ""
    };
    const state = flag === true ? stateTwo : stateOne;

    if (0 <= xCoor && 0 <= yCoor) {
      if (pDir === "N" || pDir === "S" || pDir === "E" || pDir === "W") {
        // this.setState({ dir: pDir, position: [xCoor, yCoor], coordinates: "" });
        if (pDir === "N") {
          if (flag === true) {
            state.direction2 = 90;
            state.dir2 = "N";
            state.angle2 = 90;
            state.position2 = [xCoor, yCoor];
            state.coordinates2 = "";
          } else {
            state.direction = 90;
            state.dir = "N";
            state.angle = 90;
            state.position = [xCoor, yCoor];
            state.coordinates = "";
          }

          this.setState(state);
        } else if (pDir === "W") {
          if (flag === true) {
            state.direction2 = 180;
            state.dir2 = "W";
            state.angle2 = 0;
            state.position2 = [xCoor, yCoor];
            state.coordinates2 = "";
          } else {
            state.direction = 180;
            state.dir = "W";
            state.angle = 0;
            state.position = [xCoor, yCoor];
            state.coordinates = "";
          }
          this.setState(state);
        } else if (pDir === "S") {
          if (flag === true) {
            state.direction2 = 270;
            state.dir2 = "S";
            state.angle2 = 270;
            state.position2 = [xCoor, yCoor];
            state.coordinates2 = "";
          } else {
            state.direction = 270;
            state.dir = "S";
            state.angle = 270;
            state.position = [xCoor, yCoor];
            state.coordinates = "";
          }
          this.setState(state);
        } else {
          if (flag === true) {
            state.direction2 = 0;
            state.dir2 = "E";
            state.angle2 = 180;
            state.position2 = [xCoor, yCoor];
            state.coordinates2 = "";
          } else {
            state.direction = 0;
            state.dir = "E";
            state.angle = 180;
            state.position = [xCoor, yCoor];
            state.coordinates = "";
          }
          this.setState(state);
        }
      } else {
        if (flag === true) {
          this.setState({ coordinates2: "" });
          window.alert("The direction needs to be N, S, E or W");
        } else {
          this.setState({ coordinates: "" });
          window.alert("The direction needs to be N, S, E or W");
        }
      }
    } else {
      if (flag === true) {
        this.setState({ coordinates2: "" });
        window.alert("The coordinates need to be integers for both x and y");
      } else {
        this.setState({ coordinates: "" });
        window.alert("The coordinates need to be integers for both x and y");
      }
    }
    console.log("Created grid, these are the dimensions", xCoor, yCoor, pDir);
  };
  sendCommands = e => {
    let each;
    const split = [];
    if (
      this.state.inputCommand !== "" ||
      this.state.commandQueu[0] !== undefined
    ) {
      let splitTemp =
        this.state.inputCommand !== ""
          ? this.state.inputCommand.split("")
          : this.state.commandQueu.map(each => each);
      splitTemp.forEach(each => split.push(each));
      each = split[0];
      split.shift();
    } else {
      let splitTemp =
        this.state.inputCommand2 !== ""
          ? this.state.inputCommand2.split("")
          : this.state.commandQueu2.map(each => each);
      splitTemp.forEach(each => split.push(each));
      each = split[0];
      split.shift();
    }
    console.log("SPlit values", split, each);

    if (each !== "M") {
      let currentDir =
        this.state.inputCommand !== "" ||
        this.state.commandQueu[0] !== undefined
          ? this.state.direction
          : this.state.direction2;
      let change = each === "L" ? 90 : 270;
      console.log("what angle is each", change);
      currentDir += change;
      if (change === 270) {
        if (currentDir >= 360) {
          currentDir -= 360;
        } else {
        }
      }
      currentDir = currentDir === 360 ? 0 : currentDir;
      if (currentDir === 90) {
        if (
          this.state.inputCommand !== "" ||
          this.state.commandQueu[0] !== undefined
        ) {
          this.setState({
            direction: currentDir,
            dir: "N",
            angle: 90,
            commandQueu: split,
            inputCommand: ""
          });
        } else {
          this.setState({
            direction2: currentDir,
            dir2: "N",
            angle2: 90,
            commandQueu2: split,
            inputCommand2: ""
          });
        }
      } else if (currentDir === 180) {
        if (
          this.state.inputCommand !== "" ||
          this.state.commandQueu[0] !== undefined
        ) {
          this.setState({
            direction: currentDir,
            dir: "W",
            angle: 0,
            commandQueu: split,
            inputCommand: ""
          });
        } else {
          this.setState({
            direction2: currentDir,
            dir2: "W",
            angle2: 0,
            commandQueu2: split,
            inputCommand2: ""
          });
        }
      } else if (currentDir === 270) {
        if (
          this.state.inputCommand !== "" ||
          this.state.commandQueu[0] !== undefined
        ) {
          this.setState({
            direction: currentDir,
            dir: "S",
            angle: 270,
            commandQueu: split,
            inputCommand: ""
          });
        } else {
          this.setState({
            direction2: currentDir,
            dir2: "S",
            angle2: 270,
            commandQueu2: split,
            inputCommand2: ""
          });
        }
      } else {
        if (
          this.state.inputCommand !== "" ||
          this.state.commandQueu[0] !== undefined
        ) {
          this.setState({
            direction: currentDir,
            dir: "E",
            angle: 180,
            commandQueu: split,
            inputCommand: ""
          });
        } else {
          this.setState({
            direction2: currentDir,
            dir2: "E",
            angle2: 180,
            commandQueu2: split,
            inputCommand2: ""
          });
        }
      }
    } else {
      if (
        this.state.inputCommand !== "" ||
        this.state.commandQueu[0] !== undefined
      ) {
        this.setState({ commandQueu: split, inputCommand: "" });
        this.handleMove();
      } else {
        this.setState({ commandQueu2: split, inputCommand2: "" });
        this.handleMove();
      }
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.commandQueu !== this.state.commandQueu) {
      if (this.state.commandQueu.length !== 0) {
        this.sendCommands();
      } 
      if (this.state.commandQueu.length === 0 && this.state.inputCommand2 !== "") {
        this.sendCommands();
      } 
      
    }

    if (prevState.commandQueu2 !== this.state.commandQueu2) {
      if (this.state.commandQueu2.length !== 0) {
        this.sendCommands();
      }
    }
  };

  render() {
    return (
      <div>
        <GridDisplay
          angle={this.state.angle}
          position={this.state.position}
          xGridNumber={this.state.xGrids}
          yGridNumber={this.state.yGrids}
          angle2={this.state.angle2}
          position2={this.state.position2}
        />
        <div>
          Current position is: (x: {this.state.position[1]}, y:{" "}
          {this.state.position[0]}) {this.state.dir}
        </div>
        <button
          className="direction"
          name="Ldirection"
          onClick={this.handleRotation}
        >
          Left
        </button>
        <button className="move" onClick={this.handleMove}>
          Move
        </button>
        <button
          className="direction"
          name="Rdirection"
          onClick={this.handleRotation}
        >
          Right
        </button>
        <div>
          Position moved to: {this.state.dir} {this.state.direction}{" "}
          {this.state.danger ? (
            <h1>
              The rover was going to be out of boundary, move was prevented.
            </h1>
          ) : null}
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
          <h3>
            Enter the coordinates of the rover: x y direction. x and y are
            integers, direction = N,S,E,W
          </h3>
          <input
            type="text"
            name="inputCoordinates"
            placeHolder="3 5 N"
            value={this.state.inputCoordinates}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="inputCoordinates2"
            placeHolder="3 5 N"
            value={this.state.inputCoordinates2}
            onChange={this.handleChange}
          />
          <button onClick={this.createGrid}>Create Grid</button>
          <h3>
            Enter instructions for rover, sequential non-space separated (L =
            left, R = right, M = move): LRM
          </h3>
          <input
            type="text"
            name="inputCommand"
            placeHolder="LMLMLMLMM"
            value={this.state.inputCommand}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="inputCommand2"
            placeHolder="LMLMLMLMM"
            value={this.state.inputCommand2}
            onChange={this.handleChange}
          />
          <button onClick={this.sendCommands}>Send Commands</button>
        </div>
      </div>
    );
  }
}

export default Grid;
