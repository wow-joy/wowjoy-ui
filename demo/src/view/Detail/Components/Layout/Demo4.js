import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Layout, Header, Nav } from "@es";
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
      }
    ]
  }
];
class Demo extends Component {
  state = {
    showLeft: true
  };
  toggleLeft = () => {
    this.setState({
      showLeft: !this.state.showLeft
    });
  };
  render() {
    return (
      <Layout
        defaultStyles={`
          &&> header{
            position: absolute
          }
        `}
        header={
          <Header
            onChange={this.toggleLeft}
            defaultValue={this.state.showLeft}
          />
        }
        asideLeft={<Nav size="small" navList={navList} />}
        showLeft={this.state.showLeft}
        leftSize="small"
      >
        children
      </Layout>
    );
  }
}
export default Demo;

export const code = `
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
      }
    ]
  }
];
class Demo extends Component {
  state = {
    showLeft: true
  };
  toggleLeft = () => {
    this.setState({
      showLeft: !this.state.showLeft
    });
  };
  render() {
    return (
      <Layout
        header={
          <Header onChange={this.toggleLeft} defaultValue={this.state.showLeft} />
        }
        asideLeft={<Nav size="small" navList={navList} />}
        showLeft={this.state.showLeft}
        leftSize="small"
      >
        children
      </Layout>
    );
  }
}`;
