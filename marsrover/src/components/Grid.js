import React, { Component } from "react";
import "./Grid.css";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      left: 0,
      right: 0,
      direction: 90,
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
    if (currentDir === 90) {
      this.setState({ direction: currentDir, dir: "N" });
    } else if (currentDir === 180) {
      this.setState({ direction: currentDir, dir: "W" });
    } else if (currentDir === 270) {
      this.setState({ direction: currentDir, dir: "S" });
    } else {
      this.setState({ direction: currentDir, dir: "E" });
    }
  };
  handleSubmit = () => {
    // this.setState({});
    console.log("test");
  };
  render() {
    return (
      <div>
        <div className="rover">
          <div className="head">Head</div>
        </div>
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
        {/* <button className="move">Move Down What</button> */}
        <button
          className="direction"
          name="Rdirection"
          // onChange={this.handleChange}
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
