import React, { Component } from "react";
import { Steps } from "@es";
import { ReactComponent as Male } from "@es/static/medias/svg/male.svg";
import { ReactComponent as Collection } from "@es/static/medias/svg/collection.svg";

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
