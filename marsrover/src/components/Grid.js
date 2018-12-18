import React, { Component } from "react";
import "./Grid.css";
import GridDisplay from "./GridDisplay";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      left: 0,
      right: 0,
      direction: 90,
      angle: 90,
      dir: "N",
      danger: false
    };
  }
  handleChange = e => {
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
    e.preventDefault();
    let direction = this.state.dir;
    let x = this.state.position[0];
    let y = this.state.position[1];
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
    this.setState({ position: [x, y] });
    // this.setState({});
    console.log("test");
  };
  render() {
    return (
      <div>
        <GridDisplay angle={this.state.angle} position={this.state.position} />
        <div>
          Current position is: {this.state.position} {this.state.dir}
        </div>
        <button
          className="direction"
          name="Ldirection"
          onClick={this.handleChange}
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
          onClick={this.handleChange}
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
      </div>
    );
  }
}

export default Grid;
