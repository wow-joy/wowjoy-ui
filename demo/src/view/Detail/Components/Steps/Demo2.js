import React, { Component } from "react";
import { Steps, Btn1, Btn2 } from "@es";

const Step = Steps.Step;

const steps = [
  {
    title: "First",
    content: "First-content"
  },
  {
    title: "Second",
    content: "Second-content"
  },
  {
    title: "Last",
    content: "Last-content"
  }
];

class Demo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>{steps[current].content}</div>
        <div>
          {current < steps.length - 1 && (
            <Btn1 onClick={() => this.next()}>Next</Btn1>
          )}
          {current === steps.length - 1 && (
            <Btn1 onClick={() => message.success("Processing complete!")}>
              Done
            </Btn1>
          )}
          {current > 0 && (
            <Btn2 style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Btn2>
          )}
        </div>
      </div>
    );
  }
}

export default Demo2;
