import React, { Component } from "react";
import Components from "@src";
import styled from "styled-components";
import home,{ ReactComponent as Home } from "@svg/home.svg";

const PROPS = {
  viewType: "password",
  user: {
    name: "xxx",
    number: "123"
  },

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
      return <Components.Layout header={<ComponentItem {...PROPS} {...this.state} btnsText={["知道了"]} />}></Components.Layout>
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
