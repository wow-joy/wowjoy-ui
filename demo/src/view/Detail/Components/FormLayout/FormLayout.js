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

class FormLayout extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "常规使用, 调整屏幕宽度查看变化",
        code: code1
      }
    ];

    return (
      <DetailTemp title={"FormLayout"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 左侧导航组件
            <br />
            2. 通常配合layout 和 header组件共同使用
          </p>
        </Description>
        <Column className={"demo-column-1"}>
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
              },
              {
                name: "fontSize",
                description: "字体大小",
                type: "number",
                default: "14"
              },
              {
                name: "maxItemWidth",
                description: "每项最大宽度",
                type: "number",
                default: "fontSize * 6 + 310"
              },
              {
                name: "labelClassName",
                description: "`label` class",
                type: "string",
                default: ""
              },
              {
                name: "getColumnsCount",
                description: "列数计算函数 (width, maxItemWidth) => number",
                type: "func",
                default: ""
              }
            ]}
          />
        </Apis>

        <Apis>
          <h2>Method</h2>
          <ApiTable
            columns={[
              {
                title: "方法名",
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
                name: "layot",
                description: "重渲染 ()=>void"
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
                name: "wjc-form-layout",
                description: "最外层"
              },
              {
                name: "wjc-form-layout-item",
                description: "每一项"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default FormLayout;
