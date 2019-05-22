import React, { Component } from "react";
import { Nav, Btn1 } from "@src";
import { ReactComponent as Home } from "@es/static/medias/svg/home.svg";
const navList = [
  {
    content: [<Home key={"home"} />, "首页"],
    id: "home1",
    to: "/"
  },
  {
    content: [<Home key={"1"} />, "1级常规下拉"],
    id: "home2",
    subList: [
      {
        content: <div>常规下拉子项</div>,
        id: "home21",
        to: "/"
      },
      {
        content: <div>2级下拉1</div>,
        id: "home22",
        subList: [
          { content: <div>111</div>, id: "x1" },
          { content: <div>222</div>, id: "x2" },
          { content: <div>333</div>, id: "x3" }
        ]
      },
      {
        content: <div>2级下拉2</div>,
        id: "home23",
        subList: [
          { content: <div>111</div>, id: "y1" },
          { content: <div>222</div>, id: "y2" },
          { content: <div>333</div>, id: "y3" }
        ]
      }
    ]
  }
];
class Demo1 extends Component {
  state = {
    arrow: true
  };
  changeHandle = (id, data) => {
    alert("切换到了id:" + id);
    return false;
  };
  iconChange = e => {
    this.setState({
      arrow: !this.state.arrow
    });
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.iconChange}>
          点击切换controlIconType, 当前：
          {this.state.arrow ? "arrow" : "delta"}
        </Btn1>
        <br />
        <br />
        <Nav
          controlIconType={this.state.arrow ? "arrow" : "delta"}
          defaultActiveId="home1"
          onChange={this.changeHandle}
          navList={navList}
        />
      </div>
    );
  }
}

export default Demo1;
