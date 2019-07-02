import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1, { code as code1 } from "./Demo1";

const Description = styled.section``;
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

class Toast extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "",
        code: code1
      }
    ];

    return (
      <DetailTemp title={"Toast"}>
        <Description>
          <h2>描述</h2>
          <p>1. 轻提示</p>
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
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Method Api</h2>
          <ApiTable
            columns={[
              {
                title: "方法名",
                render: dataItem => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: dataItem => dataItem.description,
                id: 1
              },
              {
                title: "参数与返回",
                render: dataItem => dataItem.type,
                id: 2
              },
              {
                title: "默认 options",
                render: dataItem => dataItem.default,
                id: 3
              }
            ]}
            data={[
              {
                name: "open",
                description: "创建一个Toast实例并显示",
                type: "( content: node ,options: object) => React.Element",
                default: `{
                  layer: false,
                  autoClose: 1000,
                  onClose: self => self.destroy();
                }`
              },
              {
                name: "loading",
                description: "创建一个Loading实例并显示",
                type: "同上",
                default: `{
                  layer: true,
                }`
              },
              {
                name: "success",
                description: "创建一个success实例并显示",
                type: "同上",
                default: `{
                  layer: false,
                  autoClose: 3000
                }`
              },
              {
                name: "error",
                description: "创建一个error实例并显示",
                type: "同上"
              },
              {
                name: "warning",
                description: "创建一个warning实例并显示",
                type: "同上"
              },
              {
                name: "info",
                description: "创建一个info实例并显示",
                type: "同上"
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Options Api</h2>
          <ApiTable
            columns={[
              {
                title: "key",
                render: dataItem => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: dataItem => dataItem.description,
                id: 1
              },
              {
                title: "类型",
                render: dataItem => dataItem.type,
                id: 2
              }
            ]}
            data={[
              {
                name: "className",
                description: "蒙层的样式",
                type: "string"
              },
              {
                name: "container",
                description: "指定输出容器",
                type: "DOM node"
              },
              {
                name: "layer",
                description: "有无蒙层",
                type: "boolean"
              },
              {
                name: "autoClose",
                description: "自动关闭的等候时间",
                type: "number"
              },
              {
                name: "onClose",
                description: "关闭事件句柄，`return false` 可以阻止关闭事件。",
                type: "instance => void | boolean"
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Instance Method Api</h2>
          <ApiTable
            columns={[
              {
                title: "方法名",
                render: dataItem => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: dataItem => dataItem.description,
                id: 1
              }
            ]}
            data={[
              {
                name: "show",
                description: "显示实例"
              },
              {
                name: "hide",
                description: "隐藏实例"
              },
              {
                name: "destory",
                description: "销毁实例， 销毁后将无法被再次显示"
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Class Api</h2>
          <ApiTable
            columns={[
              {
                title: "className",
                render: (dataItem, index, colKey) => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: (dataItem, index, colKey) => dataItem.description,
                id: 1
              }
            ]}
            data={[
              {
                name: "wj-toast",
                description: "弹出层"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Toast;
