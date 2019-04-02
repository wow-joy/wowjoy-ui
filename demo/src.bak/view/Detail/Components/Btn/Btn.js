import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

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

class Btn extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "全按钮展示",
        code: `import React, { Component } from "react";
import { Btn, Btn1, Btn2, Btn3, BtnDisabled } from "@es";

class Demo1 extends Component {
  render() {
    return (
      <div>
        <Btn>Btn</Btn>|||
        <Btn1>Btn1</Btn1>|||
        <Btn2>Btn2</Btn2>|||
        <Btn3>Btn3</Btn3>|||
        <BtnDisabled>BtnDisabled</BtnDisabled>
      </div>
    );
  }
}`
      },
      {
        display: <Demo2 />,
        description: "点击事件与路由跳转",
        code: `import React, { Component } from "react";
import { Btn } from "@es";

class Demo2 extends Component {
  clickHandle = () => {
    alert("点击事件先于路由跳转触发\\n在这里return false可以阻止路由继续跳转 ");
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.clickHandle} to={"/list"}>
          点击跳转到list
        </Btn1>
      </div>
    );
  }
}`
      }
    ];

    return (
      <DetailTemp title={"Btn"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 按钮组件<br />
            2. 详细内容查阅<HashLink href="#api">api</HashLink>
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
        <Apis>
          <h2>Api</h2>
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
                name: "to",
                description: "路由跳转",
                type: "string",
                default: ""
              },
              {
                name: "onClick",
                description: (
                  <div>
                    点击事件。 <br />先于路由跳转执行，若要先执行路由跳转后执行点击事件，使用异步方式（_谨慎使用，异步方式不确定性太高_）<br />`return
                    false` 会阻止`to`中设定的路由跳转。
                  </div>
                ),
                type: "function",
                default: ""
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Btn;
