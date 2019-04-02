import React, { Component } from "react";
import styled from "styled-components";
import list from "./svgList";
import maleImg, {
  ReactComponent as MaleSvg
} from "@es/static/medias/svg/male.svg";
import CodeDemo from "@demoComponents/CodeDemo";
import DetailTemp from "@demoComponents/DetailTemp";

const Display = styled.dl`
  padding: 0 6px;
  margin: 4px 6px;
  text-align: center;
  dd {
    width: 80px;
    word-break: break-all;
    white-space: wrap;
  }
  svg {
    width: 40px;
    height: 40px;
  }
`;

const Column = styled.div``;


const SvgItem = ({ name }) => {
  const Svg = require(`@es/static/medias/svg/${name}.svg`)
    .ReactComponent;
  return (
    <Display>
      <dt>
        <Svg />
      </dt>
      <dd>{name}</dd>
    </Display>
  );
};

const SvgWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > dl {
    flex-shrink: 0;
    flex-grow: 0;
  }
`;
const Search = styled.div`
  text-align: center;
  input {
    border: 1px solid #999;
    height: 24px;
    line-height: 20px;
    border-radius: 10px;
    width: 40%;
    margin: 20px;
    padding: 2px 16px;
    transition: 0.3s;
    &:focus {
      border-color: #06aea6;
    }
  }
`;
const Description = styled.section``;

const HashLink = styled.a`
  color: #06aea6;
  text-decoration: underline;
  &:hover {
    text-decoration-style: dotted;
  }
`;

const Icon = styled(MaleSvg)`
  width: 40px;
  height: 40px;
  path:nth-child(1) {
    fill: #ccc;
  }
  path:nth-child(24) {
    fill: yellow;
  }
  path:nth-child(25) {
    fill: yellow;
  }
  path:nth-child(26) {
    fill: yellow;
  }
  path:nth-child(27) {
    fill: yellow;
  }
`;
class Svg extends Component {
  state = {
    searchTag: ""
  };
  changeHandle = e => {
    this.setState({
      searchTag: e.target.value
    });
  };
  render() {
    const demoList = [
      {
        display: <MaleSvg style={{ width: "40px", height: "40px" }} />,
        description: <p>作为svg引入</p>,
        code: `// Type 1
import { ReactComponent as Male } from "@es/static/medias/svg/male.svg";

// Type 2
const Male = require("@es/static/medias/svg/male.svg").ReactComponent;

const Render = () =>  <Male style={{width: '40px', height: '40px'}} />`
      },
      {
        display: [
          <img
            key={0}
            src={maleImg}
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px"
            }}
            alt=""
          />,
          <div
            key={1}
            style={{
              display: "inline-block",
              width: "40px",
              height: "40px",
              background: `url(${maleImg}) center/contain no-repeat`,
              border: "1px solid #ddd"
            }}
          />
        ],
        description: <p>作为图片引入</p>,
        code: `// Type 1
import male from "@es/static/medias/svg/male.svg";

// Type 2
const male = require("@es/static/medias/svg/male.svg").default;

const Render = () =>  <img src={male} style={{width: '40px', height: '40px'}} />
const Render = () =>  <div style={{
  width: '40px', 
  height: '40px', 
  background: \`url(\${maleImg}) center/contain no-repeat\`,
  border: '1px solid #ddd'}}
></div>`
      },
      {
        display: <Icon style={{ width: "40px", height: "40px" }} />,
        description: <p>样式修改</p>,
        code: `import { ReactComponent as Male } from "@es/static/medias/svg/male.svg";
import styled from 'styled-components';
const Icon = styled(Male)\`
  width: 40px;
  height: 40px;
  path:nth-child(1){
    fill: #ccc;
  }
  path:nth-child(24){
    fill: yellow;
  }
  path:nth-child(25){
    fill: yellow;
  }
  path:nth-child(26){
    fill: yellow;
  }
  path:nth-child(27){
    fill: yellow;
  }
\`

const Render = () =>  <img src={male} style={{width: '40px', height: '40px'}} />`
      }
    ];
    return (
      <DetailTemp title={"SVG"}>
        <Search>
          搜索名称
          <input type="text" onChange={this.changeHandle} />
        </Search>
        <SvgWrap>
          {list.reduce((prevRes, current) => {
            current.indexOf(this.state.searchTag) > -1 &&
              prevRes.push(<SvgItem name={current} key={current} />);
            return prevRes;
          }, [])}
        </SvgWrap>
        <Description>
          <h2>描述</h2>
          <p>
            1. svg的使用需要预装 <b>@svgr/webpack</b> 依赖并配置<br />
            2. 本svg库提供公用的图标，个别项目的私有图标请自行引用<br />
            3. svg的引入允许 <code>{`<svg/>`}</code>， <code>{`<img/>`}</code>{" "}
            两种形式引入（详见
            <HashLink href="#demo1">demo-引入方式</HashLink>）<br />
            4. <code>{`<svg/>`}</code>的方式的引入允许修改图片样式（详见
            <HashLink href="#demo2">demo-样式修改</HashLink>）
          </p>
        </Description>
        <Column className={'demo-column'}>
          {demoList
            .filter((ele, index) => index % 2 === 0)
            .map((ele, index) => (
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
        <Column className={'demo-column'}>
          {demoList
            .filter((ele, index) => index % 2 === 1)
            .map((ele, index) => (
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
      </DetailTemp>
    );
  }
}

export default Svg;
