import React, { Component } from "react";
import Components, { NavItem } from "@src";
import styled from "styled-components";
import { ReactComponent as Home } from "@svg/home.svg";
const X = props => <div>{props.value}</div>;

const PROPS = {
  navList: [
    {
      content: (
        <NavItem>
          <Home /> 首页
        </NavItem>
      ),
      // onClick: '',
      // subList: [],
      // subViewType: 'pop',
      subList: [
        {
          content: <NavItem rank={1}>参数设置</NavItem>
        }
      ]
    },
    {
      content: (
        <NavItem>
          <Home /> 招聘管理
        </NavItem>
      )
    },
    {
      content: (
        <NavItem>
          <Home /> 招聘管理
        </NavItem>
      ),
      // subViewType: 'pop',
      isActive: true,
      subList: [
        {
          content: <NavItem  rank={1}>参数设置</NavItem >,
          subViewType: "pop",
          subList: [
            { content: <NavItem rank={2}>职级序列与职级</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位1</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位2</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位3</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位31</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位32</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位33</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位34</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位35</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位36</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位37</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位38</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位39</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位30</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位13</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位23</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位33</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位43</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位53</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位63</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位73</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位83</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位93</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位03</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位103</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位203</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位303</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位403</NavItem> },
            { content: <NavItem rank={2}>岗位类型与岗位4</NavItem> }
          ]
        },
        {
          subViewType: "pop",
          content: <NavItem rank={1}>考勤假期设置</NavItem>
        }
      ]
    },
    {
      content: (
        <NavItem>
          <Home /> 招聘管理
        </NavItem>
      )
    }
  ],
  keyName: "nav1"
  // isblur: true
};

class Detail extends Component {
  state = { visible: true };
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
        <div style={{ width: "230px" }}>
          <ComponentItem {...PROPS}>ComponentItem</ComponentItem>
        </div>
      );
    }
    return <div>ComponentItem not found</div>;
  }
}

export default Detail;
