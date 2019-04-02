import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

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

class Dialog extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "常规使用",
        code: `import { Dialog, DialogDark, DialogConfirm } from "@es";
class Demo1 extends React.PureComponent {
  state = {
    visible1: false,
    visible2: false,
    visible3: false
   };
  open = index => () => {
    console.log(index)
    this.setState({
      ['visible' + index]: true,
    });
  };
  close = index => () => {
    this.setState({
      ['visible' + index]: false,
    })
  };
  render() {
    return (
      <div>
        <button onClick={this.open(1)}>点我打开弹框</button>
        <Dialog
          onClose={this.close(1)}
          visible={this.state.visible1}
        >
          普通弹框
        </Dialog>
        <button onClick={this.open(2)}>点我打开深色header的弹框</button>
        <DialogDark
          onClose={this.close(2)}
          visible={this.state.visible2}
        >
          深色header的弹框
        </DialogDark>
        <button onClick={this.open(3)}>点我打开Confirm弹框</button>
        <DialogConfirm
          onClose={this.close(3)}
          visible={this.state.visible3}
        >
          Confirm弹框
        </DialogConfirm>
      </div>
    );
  }
}`
      },
      {
        display: <Demo2 />,
        description: "按钮事件设置",
        code: `import React, { PureComponent } from "react";
import { Dialog, Btn1, Btn2, Btn3, BtnDisabled } from "@es";
import styled from "styled-components";

class Demo1 extends PureComponent {
state = {
  visible: false
};
open = () => {
  this.setState({
    visible: true
  });
};
close = () => {
  alert("弹框将被关闭");
  this.setState({
    visible: false
  });
};
clickHandle = (event, index) => {
  alert("点击了第" + index + "个按钮");
};

render() {
  return (
    <div>
      <button onClick={this.open}>点我打开弹框</button>
      <Dialog
        title={"这是标题"}
        onClose={this.close}
        visible={this.state.visible}
        onBtnsClick={this.clickHandle}
        btnsText={["按钮1", "按钮2", "按钮3", "按钮4"]}
        btns={[Btn1, Btn2, Btn3, BtnDisabled]}
      >
        点击按钮触发事件
      </Dialog>
    </div>
  );
}
}`
      },
      {
        display: <Demo3 />,
        description: "隐藏关闭按钮，隐藏背景，自动关闭弹框",
        code: `class Demo extends PureComponent {
state = {
  visible: false
};
open = () => {
  this.setState({
    visible: true
  });
};
close = () => {
  this.setState({
    visible: false
  });
};

render() {
  return (
    <div>
      <button onClick={this.open}>点我打开弹框</button>
      <Dialog
        title={"2s后关闭"}
        onClose={this.close}
        visible={this.state.visible}
        btnsText={[]}
        autoClose={2000}
        layer={false}
        showCloseBtn = {false}
      >
        2s后关闭
      </Dialog>
    </div>
  );
}
}`
      }
    ];
    return (
      <DetailTemp title={"Dialog"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 弹框组件<br />
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
                description: "被弹出内容",
                type: "node",
                default: ""
              },
              {
                name: "visible",
                description: "是否可见",
                type: "bool",
                default: ""
              },
              {
                name: "getContainer",
                description:
                  "返回弹出到的目标 Dom 的函数, 若为`false`的话会按常规组件渲染",
                type: " func | false",
                default: "()=>document.body"
              },
              {
                name: "layer",
                description: "是否显示覆盖灰层",
                type: "bool",
                default: "true"
              },
              {
                name: "onClose",
                description: "灰层点击回调， return false 会阻止关闭。",
                type: "func",
                default: ""
              },
              {
                name: "autoClose",
                description: "自动关闭时间",
                type: "number, bool",
                default: "false"
              },
              {
                name: "translate",
                description:
                  "内容弹出定位;其余样式请使用 css 选择器修改; example: `translate(0,0)`",
                type: "string",
                default: ""
              },
              {
                name: "header",
                description:
                  "标题组件渲染函数: 例如 ()=><Foo></Foo> ;\n 当值为`false`时不显示标题;为空时显示默认标题",
                type: "func | bool",
                default: ""
              },
              {
                name: "title",
                description: "标题文本",
                type: "string",
                default: ""
              },
              {
                name: "btns",
                description: (
                  <div>
                    按钮节点数组, 请在数组中传递 function
                    而不是已经实例化的组件:<br /> 例如 [ props =>{`<Foo
                      {...props}
                    >
                      {props.children}
                    </Foo>`}] props 可以拿到默认设定的`onClick`, `className`<br />与`Btn`组件结合使用，可以直接传入[Btn_1,Btn_2]
                  </div>
                ),
                type: "array",
                default: ""
              },
              {
                name: "btnsText",
                description: "按钮文案数组: 数组个数控制按钮数量",
                type: "array",
                default: '["提交", "取消"]'
              },
              {
                name: "onClose",
                description:
                  "关闭事件，点击`x`按钮触发，`onClick`没有`return false` 也会触发",
                type: "func",
                default: ""
              },
              {
                name: "onBtnsClick",
                description: (
                  <div>
                    按钮点击事件。包含组件内除关闭按钮外的所有按钮。
                    接受两个参数`(event,index)`<br /> `event`: 点击事件<br />`index`:
                    被点击按钮的下标<br /> `return false`可以阻止组件被关闭
                  </div>
                ),
                type: "bool",
                default: "true"
              },
              {
                name: "showCloseBtn",
                description: "是否显示关闭按钮",
                type: "bool",
                default: "true"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Dialog;
