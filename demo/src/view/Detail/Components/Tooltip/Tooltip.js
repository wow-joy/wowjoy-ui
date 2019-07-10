import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";

const Description = styled.section``;
const HashLink = styled.a``;
const Column = styled.div``;

const Apis = styled.section`
  padding-top: 20px;
  width: 100%;
  clear: both;
  table {
    width: 100%;
  }
  td {
    padding: 4px 6px;
  }
`;

class Tooltip extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "基本用法",
        code: `import React, { Component } from "react";
import { Tooltip } from "@es";

class Demo1 extends Component {
    render() {
    return (
        <Tooltip title="aosiaois">Tooltip will show on mouse enter.</Tooltip>
    );
    }
}
        `
      },
      {
        display: <Demo2 />,
        description: "位置有12个方向，修改placement",
        code: `import React, { Component } from "react";
import { Tooltip } from "@es";

const grid = {
    TR: "topRight",
    Top: "top",
    TL: "topLeft",
    BR: "bottomRight",
    Bottom: "bottom",
    BL: "bottomLeft",
    LT: "leftTop",
    Left: "left",
    LB: "leftBottom",
    RT: "rightTop",
    Right: "right",
    RB: "rightBottom"
};

class Demo2 extends Component {
    render() {
    return (
        <Grid>
            {Object.keys(grid).map((s, i) => {
                return (
                    <Tooltip key={i} title={"hello world"} placement={grid[s]}>
                        <Cell area={s}>{s}</Cell>
                    </Tooltip>
                );
            })}
        </Grid>
    );
    }
}
        `
      },
      {
        display: <Demo4 />,
        description:
          "SimpleTooltip, 由css来定位性能更佳，由有滚动的情况下气泡也会跟随触发元素，会在触发元素外包一层span",
        code: `import React, { Component } from "react";
import { SimpleTooltip } from "@es";
import styled from "styled-components";

const Cell = styled.div\`\`;
const Grid = styled.div\`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 80px);
  grid-template-areas:
    ". TL Top TR ."
    "LT . . . RT"
    "Left . . . Right"
    "LB . . . RB"
    ". BL Bottom BR .";
  $\{Cell\} {
    width: 100%;
    text-align: center;
    padding: 0;
    align-self: center;
    justify-self: center;
    background-color: #ddd;
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: sans-serif;
    cursor: pointer;
  }
\`;

const grid = {
  TR: "topRight",
  Top: "top",
  TL: "topLeft",
  BR: "bottomRight",
  Bottom: "bottom",
  BL: "bottomLeft",
  LT: "leftTop",
  Left: "left",
  LB: "leftBottom",
  RT: "rightTop",
  Right: "right",
  RB: "rightBottom"
};

class Demo4 extends Component {
  render() {
    return (
      <Grid>
        {Object.keys(grid).map((s, i) => {
          return (
            <SimpleTooltip
              key={i}
              title={"hello world"}
              placement={grid[s]}
              defaultStyles={\`grid-area: $\{s\};\`}
            >
              <Cell>{s}</Cell>
            </SimpleTooltip>
          );
        })}
      </Grid>
    );
  }
}
`
      },
      {
        display: <Demo3 />,
        description: "设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。",
        code: `import React, { Component } from "react";
import { Tooltip } from "@es";

class Demo1 extends Component {
  render() {
    return (
      <div>
        <Tooltip placement="topLeft" title="Prompt Text">
          <span>Align edge / 边缘对齐</span>
        </Tooltip>
        <br />
        <Tooltip placement="bottomLeft" title="Prompt Text" arrowPointAtCenter>
          <span>Arrow points to center / 箭头指向中心</span>
        </Tooltip>
      </div>
    );
  }
}`
      }
    ];

    return (
      <DetailTemp title={"Tooltip"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 简单的文字提示气泡框。
            <br />
            2. 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。可用来代替系统默认的
            title 提示，提供一个按钮/文字/操作的文案解释。
          </p>
        </Description>
        <Column className={"demo-column"}>
          {demoList
            //   .filter((ele, index) => index % 2 === 0)
            .map((ele, index) => (
              <CodeDemo display={ele.display} description={ele.description} key={index}>
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
        <Apis>
          <h2>公用Tooltip</h2>
          <ApiTable
            data={[
              {
                name: "className",
                description: "顶层样式 class",
                type: "string",
                default: ""
              },
              {
                name: "defaultStyles",
                description: "顶层默认样式",
                type: "string",
                default: ""
              },
              {
                name: "visible",
                description: "用于手动控制浮层显隐",
                type: "boolean",
                default: ""
              },
              {
                name: "defaultVisible",
                description: "默认是否显隐",
                type: "boolean",
                default: ""
              },
              {
                name: "theme",
                description: "内容",
                type: "气泡主题色，可选 dark light",
                default: "dark"
              },
              {
                name: "children",
                description: "触发区域",
                type: "node",
                default: ""
              },
              {
                name: "title",
                description: "气泡内容",
                type: "node",
                default: ""
              },
              {
                name: "mouseEnterDelay",
                description: "鼠标移入后延时多少才显示 Tooltip，单位：秒",
                type: "number",
                default: "0.1"
              },
              {
                name: "mouseLeaveDelay",
                description: "鼠标移出后延时多少才显示 Tooltip，单位：秒 ",
                type: "number",
                default: "0.1"
              },
              {
                name: "placement",
                description:
                  "气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",
                type: "string",
                default: "top"
              },
              {
                name: "enterAnimation",
                description: "入场动画,object（styled-components 的 keyframes 定义）",
                type: "node",
                default: ""
              },
              {
                name: "leaveAnimation",
                description: "出场动画,object（styled-components 的 keyframes 定义）",
                type: "node",
                default: ""
              },
              {
                name: "onVisibleChange",
                description: "显示隐藏的回调",
                type: "(visible) => void",
                default: ""
              },
              {
                name: "autoAdjustOverflow",
                description: "气泡被遮挡时自动调整位置",
                type: "boolean",
                default: "true"
              },
              {
                name: "arrowMargin",
                description: "气泡箭头和触发元素的距离",
                type: "number",
                default: "4"
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Tooltip</h2>
          <ApiTable
            data={[
              {
                name: "arrowPointAtCenter",
                description: "箭头是否指向目标元素中心",
                type: "boolean",
                default: "false"
              },
              {
                name: "getContainer",
                description: "浮层渲染父节点，默认渲染到 body 上",
                type: "function",
                default: "()=>document.body"
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>SimpleTooltip</h2>
          <ApiTable
            data={[
              {
                name: "arrowPointAtCenter",
                description: "箭头是否指向目标元素中心",
                type: "boolean",
                default: "false"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Tooltip;
