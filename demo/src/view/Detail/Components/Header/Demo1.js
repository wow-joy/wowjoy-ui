import React, { Component } from "react";
import { Header } from "@es";

class Demo1 extends Component {
  changeHandle = () => {
    alert("左侧按钮被点击");
  };
  render() {
    return (
      <Header
        title={"这是标题"}
        user={{
          name: "用户名",
          number: "工号10086"
        }}
        onChange={this.changeHandle}
      >
        这是内容
      </Header>
    );
  }
}

export default Demo1;
