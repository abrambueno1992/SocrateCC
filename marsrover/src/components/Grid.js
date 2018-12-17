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
      dir: "N"
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

  handleSubmit = () => {
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
        <button className="move">Move</button>
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
        </div>
      </div>
    );
  }
}

export default Grid;
