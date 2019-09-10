import React, { Component } from "react";
import { Header } from "@es";

class Demo1 extends Component {
  render() {
    return (
      <Header
        title={"这是标题"}
        user={{
          name: "用户名",
          number: "工号10086"
        }}
        showFullName
      >
        这是内容
      </Header>
    );
  }
}

export default Demo1;
