import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1, { code as code1 } from "./Demo1";
import Demo2, { code as code2 } from "./Demo2";
import Demo3, { code as code3 } from "./Demo3";

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

class ScrollBox extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "webkit原生滚动条",
        code: code1
      },
      {
        display: <Demo2 />,
        description: "非webkit原生滚动条",
        code: code2
      },
      {
        display: <Demo3 />,
        description: "不占空间的滚动条",
        code: code3
      }
    ];

    return (
      <DetailTemp title={"ScrollBox"}>
        <Description>
          <h2>描述</h2>
          <p>1. 滚动条组件</p>
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
              },
              {
                name: "dynamic",
                description:
                  "是否动态获取宽高，当可确定组件尺寸不变时请设为 false，优化性能，非原生滚动条只能自动监听重渲染，如果只有内容区域发生变化请使用`rerender` Method。",
                type: "bool",
                default: ""
              },
              {
                name: "cover",
                description: "是否覆盖内容区域，覆盖时滚动条会覆盖边缘数据",
                type: "bool",
                default: ""
              },
              {
                name: "showOuterBorder",
                description: "是否显示外边框",
                type: "bool",
                default: ""
              },
              {
                name: "unUseNative",
                description:
                  "是否禁用原生滚动条（webkit 会默认启用原生滚动条，此时`cover,dynamic` api 会失效",
                type: "bool",
                default: ""
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
                name: "wjc-scroll-wrap",
                description: "最外层"
              },
              {
                name: "wjc-scroll-content",
                description: "滚动区域外层"
              },
              {
                name:
                  "wjc-scroll-bar[(.wjc-scroll-bar-axis__x),(.wjc-scroll-bar-axis__y)]",
                description: "滚动条[(x轴),(y轴)] 启用webkit原生滚动条时不存在"
              },
              {
                name:
                  "wjc-scroll-slider[(.wjc-scroll-slider-axis__x),(.wjc-scroll-slider-axis__y)]",
                description: "滑块[(x轴),(y轴)] 启用webkit原生滚动条时不存在"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default ScrollBox;
