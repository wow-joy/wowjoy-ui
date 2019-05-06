import React, { Component } from "react";
import { Steps } from "@es";

class Demo4 extends Component {
  render() {
    return (
      <Steps current={1} status="error">
        <Steps.Step title="Finished" description="This is a description" />
        <Steps.Step title="Process" description="This is a description" />
        <Steps.Step title="Waiting" description="This is a description" />
      </Steps>
    );
  }
}

export default Demo4;
