import React, { Component } from "react";
import { Steps } from "@es";

class Demo8 extends Component {
  render() {
    return (
      <Steps type="arrow" current={1}>
        <Steps.Step description="This is a description." />
        <Steps.Step description="This is a description." />
        <Steps.Step description="This is a description." />
      </Steps>
    );
  }
}

export default Demo8;
