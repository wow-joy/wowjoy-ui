import React, { Component } from "react";
import { Steps } from "@es";

class Demo3 extends Component {
  render() {
    return (
      <Steps direction="vertical" current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step title="Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
    );
  }
}

export default Demo3;
