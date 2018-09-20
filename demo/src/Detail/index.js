import React, { Component } from "react";
import Components from "@src";
import styled from "styled-components";
import { ReactComponent as Home } from "@svg/home.svg";

const PROPS = {
  total: 1000,
  pageSizeList: [10, 20, 30],
  defaultPageSize: 10,
  onChange: (...args) => console.log(args)
};
class Detail extends Component {
  state = { visible: false, showLeft: true };
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
        <ComponentItem {...PROPS} {...this.state} btnsText={["知道了"]}>
          ComponentItem
        </ComponentItem>
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
