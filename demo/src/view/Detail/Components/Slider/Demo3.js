import React, { Component } from "react";
import { Slider } from "@es";

const style = {
  float: "left",
  height: 300,
  marginLeft: 70
};

const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50"
    },
    label: <strong>100°C</strong>
  }
};

class Demo3 extends Component {
  render() {
    return (
      <div style={{ height: 300 }}>
        <div style={style}>
          <Slider vertical defaultValue={30} />
        </div>
        <div style={style}>
          <Slider vertical step={10} defaultValue={[20, 50]} />
        </div>
        <div style={style}>
          <Slider vertical marks={marks} defaultValue={[26, 37]} />
        </div>
      </div>
    );
  }
}

export default Demo3;
