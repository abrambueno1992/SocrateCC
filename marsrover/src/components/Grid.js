import React, { Component } from "react";
import "./Grid.css";
import GridDisplay from "./GridDisplay";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      xGrids: 0,
      yGrids: 0,
      left: 0,
      right: 0,
      direction: 90,
      angle: 90,
      dir: "N",
      danger: false,
      inputCommand: "",
      inputGrid: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    let value = e.target.value.toUpperCase();
    let split = value.split("");
    console.log(value, split, split[-1]);
    if (
      split[split.length - 1] === "L" ||
      split[split.length - 1] === "R" ||
      split[split.length - 1] === "M" ||
      split[split.length - 1] === undefined
    ) {
      this.setState({ [e.target.name]: value });
    }

    return;
  };
  handleGrid = e => {
    e.preventDefault();
    let handleLength = this.state.inputGrid.split("").length;

    let value = e.target.value;
    // if (value === " ") {
    // if (handleLength + 1 <= 3) {
    this.setState({ [e.target.name]: value });
    // } else {
    //   this.setState({ [e.target.name]: "" });
    // }
    // this.setState({ [e.target.name]: value });
    // }
    // console.log("testing value", e.target.value, value);
    // value = parseInt(value, 10);
    // if (typeof value === "number") {
    //   this.setState({ [e.target.name]: value });
    // }
    console.log(
      "testing GRID GRID",
      e.target.value,
      typeof value,
      handleLength
    );
    return;
  };
  handleRotation = e => {
    // e.preventDefault();
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
    console.log(
      "new direction to x degrees",
      change,
      "degrees updated to: ",
      currentDir
    );
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

  handleMove = e => {
    // e.preventDefault();
    let direction = this.state.dir;
    // position = (y, x) ... values starting at (0,0)
    let x = this.state.position[1];
    let y = this.state.position[0];
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
    if (x < 0 || y < 0) {
      this.setState({ danger: true });
      return;
    }
    console.log("Change x:", x, "y:", y);
    if (x >= xGrids || y >= yGrids) {
      this.setState({ danger: true });
      return;
    }
    // position = (y, x) ... values starting at (0,0)
    this.setState({ position: [y, x], danger: false });
    // this.setState({});
    console.log("test");
  };
  createGrid = () => {
    let split = this.state.inputGrid.split(" ");
    if (split.length !== 2)
      window.alert(
        "The grid needs to have an x integer value separated by a comma and followed by a y integer value"
      );
    const x = parseInt(split[0], 10);
    const y = parseInt(split[1], 10);
    if (0 <= x && 0 <= y) {
      console.log("first", x, "second", y, typeof NaN);
      this.setState({ xGrids: x, yGrids: y });
    } else {
      this.setState({ inputGrid: "" });
      window.alert(
        "The input for the x and y values of the grid need to be integers"
      );
      // console.log("first wrong", x, "second wrong", y);
    }
  };
  sendCommands = e => {
    let split = this.state.inputCommand.split("");
    // let x = this.state.position[1];
    // let y = this.state.position[0];
    split.forEach((each, i) => {
      if (each !== "M") {
        let currentDir = this.state.direction;
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
          this.setState({ direction: currentDir, dir: "N", angle: 90 });
        } else if (currentDir === 180) {
          this.setState({ direction: currentDir, dir: "W", angle: 0 });
        } else if (currentDir === 270) {
          this.setState({ direction: currentDir, dir: "S", angle: 270 });
        } else {
          this.setState({ direction: currentDir, dir: "E", angle: 180 });
        }
      } else {
        this.handleMove();
      }
    });
  };
  render() {
    return (
      <div>
        <GridDisplay
          angle={this.state.angle}
          position={this.state.position}
          xGridNumber={this.state.xGrids}
          yGridNumber={this.state.yGrids}
        />
        <div>
          Current position is: (x: {this.state.position[0]}, y:{" "}
          {this.state.position[1]}) {this.state.dir}
        </div>
        <button
          className="direction"
          name="Ldirection"
          onClick={this.handleRotation}
          value={this.state.left}
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
          value={this.state.right}
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
          <h3>Enter grid size, space separated: x y</h3>
          <input
            type="text"
            name="inputGrid"
            placeHolder="x y"
            value={this.state.inputGrid}
            onChange={this.handleGrid}
          />
          <button onClick={this.createGrid}>Create Grid</button>
          {/* {this.state.inputGrid} */}
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
          <button onClick={this.sendCommands}>Send Commands</button>
          {/* {this.state.inputCommand} */}
        </div>
      </div>
    );
  }
}

export default Grid;
