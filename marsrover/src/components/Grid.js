import React, { Component } from "react";
import "./Grid.css";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      left: 0,
      right: 0,
      direction: "N"
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.targe.name]: 1 });
  };
  handleSubmit = () => {
    this.setState({});
  };
  render() {
    return (
      <div>
        <div className="rover">
          <div className="head">Head</div>
        </div>
        <div>
          Current position is: {this.state.position} {this.state.direction}
        </div>
        <button
          className="direction"
          name="Ldirection"
          onChange={this.handleChange}
          value={this.state.left}
        >
          Left
        </button>
        <button className="move">Move</button>
        {/* <button className="move">Move Down What</button> */}
        <button
          className="direction"
          name="Ldirection"
          onChange={this.handleChange}
          value={this.state.right}
        >
          Right
        </button>
        <div>Position moved to: {this.state.direction}</div>
      </div>
    );
  }
}

export default Grid;
