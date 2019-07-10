import React, { Component } from "react";
import { Slider } from "@es";

function formatter(value) {
  return `${value}%`;
}

class Demo3 extends Component {
  render() {
    return (
      <div>
        <Slider tipFormatter={formatter} />
        <Slider tipFormatter={null} />
      </div>
    );
  }
}

export default Demo3;
