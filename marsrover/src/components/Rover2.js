import React, { Component } from "react";
// redux
import { connect } from "react-redux";
import { setPosR2 } from "../actions/rover2";
class Rover2 extends Component {
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
)(Rover2);
