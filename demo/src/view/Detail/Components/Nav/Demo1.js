import React, { Component } from "react";
import { Nav } from "@src";
import { ReactComponent as Home } from "@es/static/medias/svg/home.svg";

class Demo1 extends Component {
  changeHandle = (id, data) => {
    alert("切换到了id:" + id);
    return false
  };
  render() {
    return (
      <Nav
        defaultActiveId="home1"
        onChange={this.changeHandle}
        navList={[
          {
            content: [<Home key={"home"} />, "首页"],
            id: "home1",
            to: '/'
          },
          {
            content: "1级常规下拉",
            id: "home2",
            subList: [
              {
                content: <div>常规下拉子项</div>,
                id: "home21",
            to: '/'

              },
              {
                content: <div>2级常规下拉</div>,
                id: "home22",
                subList: [
                  { content: <div>111</div>, id: "x1" },
                  { content: <div>222</div>, id: "x2" },
                  { content: <div>333</div>, id: "x3" }
                ]
              },
              {
                content: <div>2级弹出下拉</div>,
                subViewType: "pop",
                id: "home23",
                subList: [
                  { content: <div>111</div>, id: "y1" },
                  { content: <div>222</div>, id: "y2" },
                  { content: <div>333</div>, id: "y3" }
                ]
              }
            ]
          }
        ]}
      />
    );
  }
}

export default Demo1;
