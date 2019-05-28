import React, { PureComponent } from "react";
import { ScrollBox, Btn1 } from "@src";

const arr = Array(100).fill("");
class Demo1 extends PureComponent {
  scrollRef;
  onClick = () => {
    this.scrollRef.scrollTo(5, 250);
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.onClick}>点击滚动至(5，250)</Btn1>
        <ScrollBox
          showOuterBorder
          ref={el => (this.scrollRef = el)}
          style={{ width: "300px", height: "300px" }}
        >
          {arr.map((ele, index) => (
            <i key={index}>{index + 1}</i>
          ))}
          {arr.map((ele, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </ScrollBox>
      </div>
    );
  }
}

export const code = `
const arr = Array(100).fill("");
class Demo1 extends PureComponent {
  scrollRef;
  onClick = () => {
    this.scrollRef.scrollTo(5, 250);
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.onClick}>点击滚动至(5，250)</Btn1>
        <ScrollBox
          showOuterBorder
          ref={el => (this.scrollRef = el)}
          style={{ width: "300px", height: "300px" }}
        >
          {arr.map((ele, index) => (
            <i key={index}>{index + 1}</i>
          ))}
          {arr.map((ele, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </ScrollBox>
      </div>
    );
  }
}
`;

export default Demo1;
