import React, { Component } from "react";
import Components, { NavContent } from "@src";
import styled from "styled-components";
import { ReactComponent as Home } from "@svg/home.svg";

const PROPS = {
  user: {
    name: "abc"
  },
  navList: [
    {
      content: [<Home />, "首页x"],
      id: "home1",
      // onClick: '',
      // subList: [],
      // subViewType: "pop",
      subList: [
        {
          content: <div>参数设置</div>,
          id: "home11"
        }
      ]
    },
    {
      content: [<Home />, "招聘管理"],
      id: "home2",
      to: "./list"
    },
    {
      content: [<Home />, "招聘管理"],
      id: "home3",
      // subViewType: 'pop',
      defaultIsOpen: true,
      subList: [
        {
          content: <div>参数设置</div>,
          subViewType: "pop",
          id: "pop",
          subList: [
            { content: <div>职级序列与职级</div>, id: "xx" },
            { content: <div>岗位类型与岗位</div> },
            { content: <div>岗位类型与岗位1</div> },
            { content: <div>岗位类型与岗位2</div> },
            { content: <div>岗位类型与岗位3</div> },
            { content: <div>岗位类型与岗位31</div> },
            { content: <div>岗位类型与岗位32</div> },
            { content: <div>岗位类型与岗位33</div> },
            { content: <div>岗位类型与岗位34</div> },
            { content: <div>岗位类型与岗位35</div> },
            { content: <div>岗位类型与岗位36</div> },
            { content: <div>岗位类型与岗位37</div> },
            { content: <div>岗位类型与岗位38</div> },
            { content: <div>岗位类型与岗位39</div> },
            { content: <div>岗位类型与岗位30</div> },
            { content: <div>岗位类型与岗位13</div> },
            { content: <div>岗位类型与岗位23</div> },
            { content: <div>岗位类型与岗位33</div> },
            { content: <div>岗位类型与岗位43</div> },
            { content: <div>岗位类型与岗位53</div> },
            { content: <div>岗位类型与岗位63</div> },
            { content: <div>岗位类型与岗位73</div> },
            { content: <div>岗位类型与岗位83</div> },
            { content: <div>岗位类型与岗位93</div> },
            { content: <div>岗位类型与岗位03</div> },
            { content: <div>岗位类型与岗位103</div> },
            { content: <div>岗位类型与岗位203</div> },
            { content: <div>岗位类型与岗位303</div> },
            { content: <div>岗位类型与岗位403</div> },
            { content: <div>岗位类型与岗位4</div> }
          ]
        },
        {
          subViewType: "pop",
          content: <div rank={1}>考勤假期设置</div>
        }
      ]
    },
    {
      id: "home4",
      content: [<Home />, "招聘管理"]
    }
  ],
  defaultActiveKey: "home4",
  companyList: [
    { content: "树兰(杭州)医院", id: 101 },
    { content: "医院1", id: 201 },
    { content: "医院2", id: 301 }
  ],
  // isblur: true
  onChange: (...args) => console.log(args)
};

class Detail extends Component {
  state = { visible: true, showLeft: true };
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
        <div>
          <ComponentItem
            {...PROPS}
            header={<Components.Header onChange={this.toggleLeft} />}
            asideLeft={<Components.Nav size={"small"} {...PROPS} />}
            asideRight={3}
            showLeft={this.state.showLeft}
            leftSize={"small"}
          >
            ComponentItem
          </ComponentItem>
        </div>
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
