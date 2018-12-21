import React, { Component } from "react";

// Rover 1 and Rover 2 imports
import Rover1 from "./Rover1";
import Rover2 from ".Rover2";
// redux
import { connect } from "react-redux";

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // grid dimensions
      xGrids: 0,
      yGrids: 0,

      // the grid dimensions from input
      inputGrid: ""
    };
  }

  render() {
    return (
      <div>
        <Rover1 />
        <Rover2 />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Controller);
