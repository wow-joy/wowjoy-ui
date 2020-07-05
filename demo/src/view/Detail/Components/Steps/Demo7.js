import React, { Component } from "react";
import { Steps } from "@es";
import Male from "@es/components/icons/male";
import Collection from "@es/components/icons/collection";

class Demo7 extends Component {
  render() {
    return (
      <Steps type="dot" icon={<Collection />} current={1}>
        <Steps.Step
          title="Finished"
          description="This is a description."
          icon={<Male />}
        />
        <Steps.Step title="Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
    );
  }
}

export default Demo7;
