import React, { Component } from "react";
import { Tooltip } from "@es";

class Demo1 extends Component {
  render() {
    return (
      <div>
        <Tooltip placement="topLeft" title="Prompt Text">
          <span>Align edge / 边缘对齐</span>
        </Tooltip>
        <br />
        <Tooltip placement="bottomLeft" title="Prompt Text" arrowPointAtCenter>
          <span>Arrow points to center / 箭头指向中心</span>
        </Tooltip>
      </div>
    );
  }
}

export default Demo1;
