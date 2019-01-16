import React, { Component } from "react";
import Components from "@src";
import styled from "styled-components";
import home, { ReactComponent as Home } from "@svg/home.svg";
import APIStore from "@static/medias/images/APIStore.png";
const PROPS = {
  viewType: "password",
  user: {
    name: "xxx",
    number: "123"
  },
  appList: [
    {
      icon: <img src = {APIStore} />,
      id: 1,
      content: "x"
    }
  ],
  newsList: [
    {
      id: 1,
      content: "x",
      time: new Date("2019-1-2")
    }
  ]
};
class Detail extends Component {
  state = { visible: false, showLeft: true };
  companyChange = (id, content) => {
    alert("切换到id为" + id + "公司");
  };
  componentDidMount() {}
  render() {
    const { match } = this.props;
    const name = match.params.name.replace(
      /^(.)(.*)$/,
      (match, $1, $2) => $1.toUpperCase() + $2
    );
    this.name = name;
    const ComponentItem = Components[name];
    if (ComponentItem) {
      return (
       
            <ComponentItem 
            defaultActiveId="home1"
            onChange={this.changeHandle}
            navList={[
              {
                content: [<Home key={'home'} />, "首页"],
                id: "home1"
              },
              {
                content: "1级常规下拉",
                id: "home2",
                subList: [
                  {
                    content: <div>常规下拉子项</div>,
                    id: "home21"
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
    return <div>ComponentItem not found</div>;
  }
  toggleLeft = () => {
    this.setState({
      showLeft: !this.state.showLeft
    });
  };
}

export default Detail;
