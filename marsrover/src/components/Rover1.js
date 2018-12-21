import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { setPosR1 } from "../actions/rover1";
class Rover1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <div />;
  }
}
const maptStateToProps = state => {
  return {};
};
export default connect(
  maptStateToProps,
  {}
)(Rover1);
