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
    let change = e.target.name === "Ldirection" ? 90 : -90;
    currentDir += change;
    currentDir = currentDir === 360 ? 0 : currentDir;
    console.log(
      "new direction to x degrees",
      change,
      "degrees updated to: ",
      currentDir
    );
    if (currentDir === 90) {
    } else if (currentDir === 180) {
    } else if (currentDir === 270) {
    } else {
    }

    this.setState({ direction: currentDir });
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
        <div>Position moved to: {this.state.dir}</div>
      </div>
    );
  }
}

export default Grid;
