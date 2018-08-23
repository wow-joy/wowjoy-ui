import React, { Component } from "react";
import Components, { div } from "@src";
import styled from "styled-components";
import { ReactComponent as Home } from "@svg/home.svg";
const X = props => <div>{props.value}</div>;

const PROPS = {
  user: {
    name: "abc"
  },
  navList: [
    {
      content: (
        <div>
          <Home /> 首页
        </div>
      ),
      key: 'home1',
      // onClick: '',
      // subList: [],
      // subViewType: 'pop',
      subList: [
        {
          content: <div rank={1}>参数设置</div>
        }
      ]
    },
    {
      content: (
        <div>
          <Home /> 招聘管理
        </div>
      ),
      to: './list'
    },
    {
      content: (
        <div>
          <Home /> 招聘管理
        </div>
      ),
      // subViewType: 'pop',
      // isActive: true,
      subList: [
        {
          content: <div rank={1}>参数设置</div>,
          subViewType: "pop",
          subList: [
            { content: <div rank={2}>职级序列与职级</div> },
            { content: <div rank={2}>岗位类型与岗位</div> },
            { content: <div rank={2}>岗位类型与岗位1</div> },
            { content: <div rank={2}>岗位类型与岗位2</div> },
            { content: <div rank={2}>岗位类型与岗位3</div> },
            { content: <div rank={2}>岗位类型与岗位31</div> },
            { content: <div rank={2}>岗位类型与岗位32</div> },
            { content: <div rank={2}>岗位类型与岗位33</div> },
            { content: <div rank={2}>岗位类型与岗位34</div> },
            { content: <div rank={2}>岗位类型与岗位35</div> },
            { content: <div rank={2}>岗位类型与岗位36</div> },
            { content: <div rank={2}>岗位类型与岗位37</div> },
            { content: <div rank={2}>岗位类型与岗位38</div> },
            { content: <div rank={2}>岗位类型与岗位39</div> },
            { content: <div rank={2}>岗位类型与岗位30</div> },
            { content: <div rank={2}>岗位类型与岗位13</div> },
            { content: <div rank={2}>岗位类型与岗位23</div> },
            { content: <div rank={2}>岗位类型与岗位33</div> },
            { content: <div rank={2}>岗位类型与岗位43</div> },
            { content: <div rank={2}>岗位类型与岗位53</div> },
            { content: <div rank={2}>岗位类型与岗位63</div> },
            { content: <div rank={2}>岗位类型与岗位73</div> },
            { content: <div rank={2}>岗位类型与岗位83</div> },
            { content: <div rank={2}>岗位类型与岗位93</div> },
            { content: <div rank={2}>岗位类型与岗位03</div> },
            { content: <div rank={2}>岗位类型与岗位103</div> },
            { content: <div rank={2}>岗位类型与岗位203</div> },
            { content: <div rank={2}>岗位类型与岗位303</div> },
            { content: <div rank={2}>岗位类型与岗位403</div> },
            { content: <div rank={2}>岗位类型与岗位4</div> }
          ]
        },
        {
          subViewType: "pop",
          content: <div rank={1}>考勤假期设置</div>
        }
      ]
    },
    {
      content: (
        <div>
          <Home /> 招聘管理
        </div>
      )
    }
  ],
  defaultActiveKey: 'home1',
  companyList: [
    {content: '树兰(杭州)医院' ,id:1},
    {content: '医院1' ,id:2},
    {content: '医院2' ,id:3},
  ]
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
