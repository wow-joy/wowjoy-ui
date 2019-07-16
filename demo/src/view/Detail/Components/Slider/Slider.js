import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";
import Demo5 from "./Demo5";

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

class Slider extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description:
          "基本滑动条。当 value为数组 时，渲染为多滑块。当 disabled 为 true 时，滑块处于不可用状态。",
        code: `import React, { Component } from "react";
import { Slider } from "@es";

class Demo1 extends Component {
    render() {
        return (
            <div>
                <Slider defaultValue={30} />
                <Slider defaultValue={30} disabled />
                <Slider range defaultValue={[20, 50]} />
                <Slider range defaultValue={[20, 50]} disabled />
            </div>
        );
    }
}
        `
      },
      {
        display: <Demo2 />,
        description:
          "自定义提示。使用 tipFormatter 可以格式化 Tooltip 的内容，设置 tipFormatter={null}，则隐藏 Tooltip。",
        code: `import React, { Component } from "react";
import { Slider } from "@es";

function formatter(value) {
    return \`\${value}%\`;
}

class Demo2 extends Component {
    render() {
        return (
            <div>
                <Slider tipFormatter={formatter} />
                <Slider tipFormatter={null} />
            </div>
        );
    }
}
        `
      },
      {
        display: <Demo3 />,
        description: "垂直方向的 Slider",
        code: `import React, { Component } from "react";
import { Slider } from "@es";

const style = {
    float: "left",
    height: 300,
    marginLeft: 70
};

const marks = {
    0: "0°C",
    26: "26°C",
    37: "37°C",
    100: {
        style: {
            color: "#f50"
        },
        label: <strong>100°C</strong>
    }
};

class Demo3 extends Component {
    render() {
        return (
            <div style={{ height: 300 }}>
                <div style={style}>
                    <Slider vertical defaultValue={30} />
                </div>
                <div style={style}>
                    <Slider vertical step={10} defaultValue={[20, 50]} />
                </div>
                <div style={style}>
                    <Slider vertical marks={marks} defaultValue={[26, 37]} />
                </div>
            </div>
        );
    }
}`
      },
      {
        display: <Demo4 />,
        description:
          "带标签的滑块。使用 marks 属性标注分段式滑块，使用 value / defaultValue 指定滑块位置。当 included=false 时，表明不同标记间为并列关系。当 step=null 时，Slider 的可选值仅有 marks 标出来的部分。",
        code: `import React, { Component } from "react";
import { Slider } from "@es";

const marks = {
    0: "0°C",
    26: "26°C",
    37: "37°C",
    100: {
        style: {
            color: "#f50"
        },
        label: <strong>100°C</strong>
    }
};

class Demo4 extends Component {
    render() {
        return (
            <div>
                <h4>included=true</h4>
                <Slider marks={marks} defaultValue={37} />
                <Slider marks={marks} defaultValue={[26, 37]} />

                <h4>included=false</h4>
                <Slider marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <Slider marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <Slider marks={marks} step={null} defaultValue={37} />
            </div>
        );
    }
}`
      },
      {
        display: <Demo5 />,
        description: `控制 ToolTip 的显示。当 tooltipVisible 为 true 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。`,
        code: `import React, { Component } from "react";
import { Slider } from "@es";

class Demo5 extends Component {
    render() {
        return <Slider defaultValue={30} tooltipVisible />;
    }
}
        `
      }
    ];

    return (
      <DetailTemp title={"Steps"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 步骤条组件
            <br />
            2. 详细内容查阅<HashLink href="#api">api</HashLink>
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
          <h2>Steps</h2>
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
                name: "children",
                description: "内容",
                type: "node",
                default: ""
              },
              {
                name: "value",
                description: " 设置当前值。使用 number时只有一个滑块，number[]时有多个滑块",
                type: "number|number[]",
                default: ""
              },
              {
                name: "defaultValue",
                description: "设置默认值。使用 number时只有一个滑块，number[]时有多个滑块",
                type: "number|number[]",
                default: "0"
              },
              {
                name: "included",
                description: "marks 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列",
                type: "boolean",
                default: "false"
              },
              {
                name: "marks",
                description: "刻度标记，key 必须在闭区间 [min, max] 内，每个标签可以单独设置样式",
                type:
                  "{ number: string | ReactNode } or { number: { style: object, label: string | ReactNode } }",
                default: "{}"
              },
              {
                name: "max",
                description: "最大值",
                type: "number",
                default: "100"
              },
              {
                name: "min",
                description: "最小值",
                type: "number",
                default: "0"
              },
              {
                name: "step",
                description:
                  "步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分",
                type: "number/null",
                default: "1"
              },
              {
                name: "tipFormatter",
                description:
                  "Slider 会把当前值传给 tipFormatter，并在 Tooltip 中显示 tipFormatter 的返回值，若为 null，则隐藏 Tooltip",
                type: "Function/null",
                default: ""
              },
              {
                name: "vertical",
                description: "值为 true 时，Slider 为垂直方向",
                type: "boolean",
                default: "false"
              },
              {
                name: "onChange",
                description:
                  "当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入",
                type: "value=>void",
                default: ""
              },
              {
                name: "tooltipPlacement",
                description: "设置 Tooltip 展示位置。参考 Tooltip 组件",
                type: "boolean",
                default: ""
              },
              {
                name: "tooltipVisible",
                description: "值为true时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时",
                type: "boolean",
                default: ""
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Steps.Step</h2>
          <ApiTable
            data={[
              {
                name: "title",
                description: "步骤的详情描述，可选 ",
                type: "string|ReactNode",
                default: ""
              },
              {
                name: "description",
                description: "步骤的详情描述，可选 ",
                type: "string|ReactNode",
                default: ""
              },
              {
                name: "icon",
                description: (
                  <div>
                    步骤图标的类型，可选，接受函数时：(currentIcon, (index, status, title,
                    description) )=>ReactNode
                    <br />
                    currentIcon 为结合当前状态应当显示的组件（如果此时 Steps.type
                    为'dot'，currentIcon 为内置默认 Dot 组件）
                  </div>
                ),
                type: "string | ReactNode | function ",
                default: ""
              },
              {
                name: "status",
                description:
                  "指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait|process|finish|error",
                type: "string",
                default: "wait"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Slider;
