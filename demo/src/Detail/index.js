import React, { Component } from "react";
// import Components from "@src";
import Components from "../../../src";
import styled from "styled-components";
import home, { ReactComponent as Home } from "@svg/home.svg";
import APIStore from "@static/medias/images/APIStore.png";

const PROPS = {
  viewType: "password",

  appList: [
    {
      icon: <img src={APIStore} />,
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
    return (
      <ComponentItem visible pageSize={1} pageSizeList={[1,2,3,4,5]} total={100}>
        123
      </ComponentItem>
    );
  }
  toggleLeft = () => {
    this.setState({
      showLeft: !this.state.showLeft
    });
  };
}

export default Detail;
