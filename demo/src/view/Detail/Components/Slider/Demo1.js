import React, { Component } from "react";
import { Slider } from "@es";
class Demo1 extends Component {
  render() {
    return (
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} disabled />
        <Slider defaultValue={[20, 50]} />
        <Slider defaultValue={[20, 50]} disabled />
      </div>
    );
  }
}

export default Demo1;
