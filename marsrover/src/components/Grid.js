import React, { Component } from "react";
import "./Grid.css";
class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      left: 0,
      right: 0,
      direction: "x"
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.targe.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="rover" />
        <div>Current position is: {this.state.position} </div>
        <button
          className="direction"
          name="direction"
          onChange={this.handleChange}
          value={this.state.position}
        >
          Left
        </button>
        <button className="move">Move Up</button>
        <button className="move">Move Down What</button>
        <button className="direction">Right</button>
      </div>
    );
  }
}

export default Grid;
