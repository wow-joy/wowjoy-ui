import React, { Component } from "react";
import { Nav, Btn1 } from "@es";
import { ReactComponent as Home } from "@es/static/medias/svg/home.svg";

class Demo1 extends Component {
  state = {
    arrow: true,
    openKeys: [],
  };

  changeHandle = (id, data) => {
    alert("切换到了id:" + id);
    return false;
  };
  iconChange = (e) => {
    this.setState({
      arrow: !this.state.arrow,
    });
  };
  openChangeHandle = (isOpen, key) => {
    if (isOpen) {
      this.setState((prevState) => ({
        openKeys: Array.from(new Set([...prevState.openKeys, key])),
      }));
    } else {
      this.setState((prevState) => ({
        openKeys: prevState.openKeys.filter((i) => i !== key),
      }));
    }
  };

  render() {
    const navList = [
      {
        content: [<Home key={"home"} />, "首页"],
        id: "home1",
        to: "/",
      },
      {
        content: [<Home key={"1"} />, "1级常规下拉"],
        id: "home2",
        isOpen: this.state.openKeys.includes("home2"),
        subList: [
          {
            content: <div>常规下拉子项</div>,
            id: "home21",
            to: "/",
          },
        ],
      },
      {
        content: [<Home key={"1"} />, "1级常规下拉"],
        id: "home3",
        isOpen: this.state.openKeys.includes("home3"),
        subList: [
          {
            content: <div>常规下拉子项</div>,
            id: "home31",
            to: "/",
          },
          {
            content: <div>2级下拉1</div>,
            id: "home32",
            subList: [
              { content: <div>111</div>, id: "x1" },
              { content: <div>222</div>, id: "x2" },
              { content: <div>333</div>, id: "x3" },
            ],
          },
          {
            content: <div>2级下拉2</div>,
            id: "home33",
            subList: [
              { content: <div>111</div>, id: "y1" },
              { content: <div>222</div>, id: "y2" },
              { content: <div>333</div>, id: "y3" },
            ],
          },
        ],
      },
    ];
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
          onOpenChange={this.openChangeHandle}
        />
      </div>
    );
  }
}

export default Demo1;

export const code = `import React, { Component } from "react";
import { Nav, Btn1 } from "@es";
import { ReactComponent as Home } from "@es/static/medias/svg/home.svg";

const navList = [
  {
    content: [<Home key={'home'} />, "首页"],
    id: "home1"
  },
  {
    content: [<Home key={'1'} />,"1级常规下拉"],
    id: "home2",
    subList: [
      {
        content: <div>常规下拉子项</div>,
        id: "home21"
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
]
class Demo1 extends Component {
  state = {
    arrow: true
  };
  changeHandle = (id, data) => {
    alert('切换到了id:'+id )
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
}`;
