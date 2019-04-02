import React, { Component } from "react";
import { Btn1 } from "@es";

class Demo2 extends Component {
  clickHandle = () => {
    alert("点击事件先于路由跳转触发\n在这里return false可以阻止路由继续跳转 ");
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.clickHandle} to={"/list"}>
          点击跳转到list
        </Btn1>
      </div>
    );
  }
}

export default Demo2;
