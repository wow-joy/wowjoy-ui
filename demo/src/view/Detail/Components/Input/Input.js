import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";

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
        description: "输入框展示",
        code: `import React, { Component } from "react";
import { Input } from "@es";

class Demo1 extends Component {
  state = {
    text: ""
  };
  textChangeHandle = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Input
          defaultStyles={\`margin: 10px 0; 
            .wj-input-captcha__send {
              border: 1px solid #06aea6;
              width: 80px;
              justify-content: center;
            }
          \`}
          viewType="captcha"
          sendCaptcha={() =>
            new Promise((res, rej) => {
              setTimeout(res, 1000);
            })
          }
          maxCount={10}
        />
        <Input defaultStyles="margin: 10px 0;" viewType="password"  />
        <Input
          defaultStyles="margin: 10px 0;"
          placeholder={"输入查看错误信息"}
          onChange={this.textChangeHandle}
          value={this.state.text}
          errorMsg={this.state.text}
        />
      </div>
    );
  }
}

export default Demo1;
`
      }
    ];

    return (
      <DetailTemp title={"Input"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 输入框组件
            <br />
            2. 详细内容查阅
            <HashLink href="#api">api</HashLink>
          </p>
        </Description>
        <Column className={"demo-column"}>
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
        <Column className={"demo-column"}>
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
          <h3>
            公用apis
            <p>
              原生input的属性若下面列表没有展示，表示与原生用法相同，如 `text`,
              'value', 'onChange'等属性
            </p>
          </h3>
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
                name: "viewType",
                description: "输入框显示类型，不填即为 text",
                type: 'oneOf(["captcha", "password"])',
                default: ""
              },
              {
                name: "errorMsg",
                description: "错误提示",
                type: "string",
                default: ""
              }
            ]}
          />
          <br />
          <h3>captcha(验证码) Apis</h3>
          <ApiTable
            data={[
              {
                name: "maxCount",
                description: "最大等待时间",
                type: "number",
                default: ""
              },
              {
                name: "sendCaptcha",
                description: "点击发送事件，请返回Promise，res()时会进入倒计时",
                type: "func",
                default: ""
              }
            ]}
          />
          <br />
          <h3>password(密码) Apis</h3>
          <ApiTable
            data={[
              {
                name: "visibleControl",
                description:
                  "是否显示密码显隐控件 (控件的svg尚未补充，现在显示为一个黑色方体，若需使用，请使用css修改)",
                type: "bool",
                default: "false"
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>CLASS APIS</h2>
          <h3>公用 class apis</h3>
          <ApiTable
            data={[
              {
                name: "wj-input-wrap(.wrap__error)",
                description: "外层(错误状态)"
              },
              {
                name: "wj-input-base(.base__error)",
                description: "真实 input(错误状态)"
              },
              {
                name: "wj-input-msg__error",
                description: "错误提示"
              }
            ]}
          />
          <br />
          <h3>captcha(验证码) class apis</h3>
          <ApiTable
            data={[
              {
                name: "wj-input-captcha__send",
                description: "发送按钮"
              }
            ]}
          />
          <br />
          <h3>password(密码) class apis</h3>
          <ApiTable
            data={[
              {
                name: "wj-input-password__control(.visible)",
                description: "显隐控制按钮(显示)"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Btn;
