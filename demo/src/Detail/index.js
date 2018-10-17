import React, { Component } from "react";
import Components from "@src";
import styled from "styled-components";
import { ReactComponent as Home } from "@svg/home.svg";

const PROPS = {
  columns: [
    {
      title: "name",
      render: (rowEle, rowIndex) => rowEle.name,
      id: 11
    },
    {
      title: "id",
      render: (rowEle, rowIndex) => rowEle.id,
      id: 22
    },
    {
      title: "des",
      render: (rowEle, rowIndex) => rowEle.des,
      id: 33
    }
  ],
  data: [
    {
      name: "xx1",
      id: 111,
      des: "xx_1"
    },
    {
      name: "xx2",
      id: 222,
      des: "xx_2"
    },
    {
      name: "xx3",
      id: 333,
      des: "xx_3"
    }
  ],
  sort: (a, b) => b.des.match(/\d/)[0] - a.des.match(/\d/)[0],
  filter: ele => ele.name === 'xx3',
  total: 300,
  pageSizeList: [10, 20, 30],
  pageSize: 10
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
      return [
        <ComponentItem {...PROPS} {...this.state} btnsText={["知道了"]}>
          ComponentItem
        </ComponentItem>,
        <ComponentItem {...PROPS} {...this.state} btnsText={["知道了"]}>
          ComponentItem
        </ComponentItem>
      ];
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
