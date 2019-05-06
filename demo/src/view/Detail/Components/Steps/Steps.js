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
import Demo6 from "./Demo6";
import Demo7 from "./Demo7";
import Demo8 from "./Demo8";

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

class Steps extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "简单的步骤条",
        code: `import React, { Component } from "react";
import { Steps } from "@es";

class Demo1 extends Component {
    render() {
        return (
            <Steps current={1}>
                <Steps.Step title="Finished" description="This is a description." />
                <Steps.Step title="Progress" description="This is a description." />
                <Steps.Step title="Waiting" description="This is a description." />
            </Steps>
        );
    }
}`
      },
      {
        display: <Demo3 />,
        description: "简单的竖直方向的步骤条",
        code: `import React, { Component } from "react";
import { Steps } from "@es";

class Demo3 extends Component {
    render() {
        return (
            <Steps direction="vertical" current={1}>
                <Steps.Step title="Finished" description="This is a description." />
                <Steps.Step title="Progress" description="This is a description." />
                <Steps.Step title="Waiting" description="This is a description." />
            </Steps>
        );
    }
}
        `
      },
      {
        display: <Demo2 />,
        description:
          "步骤切换,通常配合内容及按钮使用，表示一个流程的处理进度。",
        code: `import React, { Component } from "react";
import { Steps, Btn1, Btn2 } from "@es";

const Step = Steps.Step;

const steps = [
    {
        title: "First",
        content: "First-content"
    },
    {
        title: "Second",
        content: "Second-content"
    },
    {
        title: "Last",
        content: "Last-content"
    }
];

class Demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div>{steps[current].content}</div>
            <div>
                {current < steps.length - 1 && (
                    <Btn1  onClick={() => this.next()}>
                        Next
                </Btn1>
                )}
                {current === steps.length - 1 && (
                    <Btn1 onClick={() => message.success("Processing complete!")} >
                        Done
                    </Btn1>
                )}
                {current > 0 && (
                    <Btn2 style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                    </Btn2>
                )}
            </div>
            </div>
        );
    }
}
`
      },
      {
        display: <Demo4 />,
        description: "步骤运行错误",
        code: `import React, { Component } from "react";
import { Steps } from "@es";

class Demo3 extends Component {
    render() {
        return (
            <Steps direction="vertical" current={1}>
                <Steps.Step title="Finished" description="This is a description." />
                <Steps.Step title="Progress" description="This is a description." />
                <Steps.Step title="Waiting" description="This is a description." />
            </Steps>
        );
    }
}
        `
      },
      {
        display: <Demo5 />,
        description: "点状步骤条",
        code: `import React, { Component } from "react";
import { Steps } from "@es";

class Demo4 extends Component {
    render() {
        return (
            <Steps type="dot" current={1}>
                <Steps.Step title="Finished" description="This is a description." />
                <Steps.Step title="Progress" description="This is a description." />
                <Steps.Step title="Waiting" description="This is a description." />
            </Steps>
        );
    }
}
`
      },
      {
        display: <Demo6 />,
        description: "垂直的点状步骤条",
        code: `import React, { Component } from "react";
import { Steps } from "@es";

class Demo4 extends Component {
    render() {
        return (
            <Steps type="dot" direction="vertical" current={1}>
                <Steps.Step title="Finished" description="This is a description." />
                <Steps.Step title="Progress" description="This is a description." />
                <Steps.Step title="Waiting" description="This is a description." />
            </Steps>
        );
    }
}
`
      },
      {
        display: <Demo7 />,
        description: "自定义Icon",
        code: `import React, { Component } from "react";
import { Steps } from "@es";
import { ReactComponent as Male } from "@es/static/medias/svg/male.svg";
import { ReactComponent as Collection } from "@es/static/medias/svg/Collection.svg";

class Demo7 extends Component {
  render() {
    return (
      <Steps type="dot" icon={<Collection />} current={1}>
        <Steps.Step
          title="Finished"
          description="This is a description."
          icon={<Male />}
        />
        <Steps.Step title="Progress" description="This is a description." />
        <Steps.Step title="Waiting" description="This is a description." />
      </Steps>
    );
  }
}
`
      },
      {
        display: <Demo8 />,
        description: "箭头样式的步骤条，该模式下只显示description，没有title",
        code: `import React, { Component } from "react";
import { Steps } from "@es";

class Demo8 extends Component {
  render() {
    return (
      <Steps type="arrow" current={1}>
        <Steps.Step description="This is a description." />
        <Steps.Step description="This is a description." />
        <Steps.Step description="This is a description." />
      </Steps>
    );
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
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
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
                name: "size",
                description: "步骤条每个的大小, 单位px",
                type: "number",
                default: "24"
              },
              {
                name: "type",
                description: '步骤条布局类型，可选 "basic"、"dot" 和 "arrow"',
                type: "string",
                default: "basic"
              },
              {
                name: "current",
                description:
                  "指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态",
                type: "number",
                default: "0"
              },
              {
                name: "direction",
                description:
                  "指定步骤条方向。支持水平（horizontal）和竖直（vertical）两种方向",
                type: "string",
                default: "horizontal"
              },
              {
                name: "labelPlacement",
                description:
                  "指定标签放置位置，默认水平放图标右侧，可选 vertical 放图标下方，upAndDown 标题和描述分别位于图标上下",
                type: "string",
                default: "horizontal"
              },
              {
                name: "status",
                description:
                  "指定当前步骤的状态，可选 wait|process|finish|error",
                type: "string",
                default: ""
              },
              {
                name: "initial",
                description: "起始序号，从 0 开始记数 ",
                type: "number",
                default: "0"
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
                    步骤图标的类型，可选，接受函数时：(currentIcon, (index,
                    status, title, description) )=>ReactNode
                    <br />
                    currentIcon 为结合当前状态应当显示的组件（如果此时
                    Steps.type 为'dot'，currentIcon 为内置默认 Dot 组件）
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

export default Steps;
