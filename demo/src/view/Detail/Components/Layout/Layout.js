import React, { Component } from "react";
import styled from "styled-components";
import { Layout as LayoutBase } from "@es";
import DetailTemp from "@demoComponents/DetailTemp";
import { Link } from "react-router-dom";
import CodeDemo from "@demoComponents/CodeDemo";
import ApiTable from "@demoComponents/ApiTable";

const Relate = styled.section``;
const Description = styled.section``;
const RouterLink = styled(Link)``;
const HashLink = styled.a``;
const Column = styled.div``;

const Apis = styled.section`
  padding-top: 20px;
  width: 100%;
  clear: both;
  table{
    width: 100%;
  }
  td {
    padding: 4px 6px;
  }
`;
class Layout extends Component {
  render() {
    const demoList = [
      {
        display: (
          <LayoutBase
            defaultStyles={`
          min-height: 0;
          &&>header{position: absolute; background: rgba(186,241,230,0.3)};
          &&>.wj-aside__left{
            height: 100px;
            background: rgba(155,243,225,0.6)
          }
        `}
            header={"header -- height: 64px"}
            asideLeft={"left -- width: 230px"}
            showLeft={true}
          >
            children
          </LayoutBase>
        ),
        description: <p>常规布局</p>,
        code: `<LayoutBase
  defaultStyles={\`
  min-height: 0;
  &&>header{position: absolute; background: rgba(186,241,230,0.3)};
  &&>.wj-aside__left{
    height: 100px;
    background: rgba(155,243,225,0.6)
  }
\`}
    header={"header -- height: 64px"}
    asideLeft={"left -- width: 230px"}
    showLeft={true}
  >
    children
</LayoutBase>`
      },
      {
        display: (
          <LayoutBase
            defaultStyles={`
              min-height: 0;
              &&>header{position: absolute; background: rgba(186,241,230,0.3)};
              &&>.wj-aside__left{
                height: 100px;
                background: rgba(155,243,225,0.6);
              }
              &&>.wj-aside__right
              {
                background: rgba(155,243,225,0.6);
              }
              &&>footer{
                background: rgba(186,241,230,0.3);
              }
            `}
            header={"header"}
            asideLeft={"left"}
            asideRight={"right"}
            footer={"footer"}
            showLeft={true}
          >
            children
          </LayoutBase>
        ),
        description: <p>完整布局方案</p>,
        code: `<Layout
    defaultStyles={\`
      min-height: 0;
      &&>header{position: absolute; background: rgba(186,241,230,0.3)};
      &&>.wj-aside__left{
        height: 100px;
        background: rgba(155,243,225,0.6);
      }
      &&>.wj-aside__right
      {
        background: rgba(155,243,225,0.6);
      }
      &&>footer{
        background: rgba(186,241,230,0.3);
      }
    \`}
    header={"header"}
    asideLeft={"left"}
    asideRight={"right"}
    footer={"footer"}
    showLeft={true}
  >
    children
  </Layout>`
      },
      {
        display: (
          <LayoutBase
            defaultStyles={`
          min-height: 0;
          &&>header{position: absolute; background: rgba(186,241,230,0.3)};
          &&>.wj-aside__left{
            height: 100px;
            background: rgba(155,243,225,0.6)
          }
        `}
            header={"header -- height: 64px"}
            asideLeft={"left -- width: 180px"}
            showLeft={true}
            leftSize="small"
          >
            children
          </LayoutBase>
        ),
        description: (
          <p>
            小型左侧导航布局 leftSize="small"，
            如果和nav组件一起使用，nav组件也应加上 size="small"
          </p>
        ),
        code: `<LayoutBase
  defaultStyles={\`
  min-height: 0;
  &&>header{position: absolute; background: rgba(186,241,230,0.3)};
  &&>.wj-aside__left{
    height: 100px;
    background: rgba(155,243,225,0.6)
  }
\`}
    header={"header -- height: 64px"}
    asideLeft={"left -- width: 230px"}
    showLeft={true}
  >
    children
</LayoutBase>`
      }
    ];
    return (
      <DetailTemp title={"Layout"}>
        <Relate>
          相关组件：
          <RouterLink to="./Header">Header</RouterLink>
          <RouterLink to="./Nav">Nav</RouterLink>
        </Relate>
        <Description>
          <h2>描述</h2>
          <p>
            1. 顶层结构布局组件<br />
            2. <b>Layout</b>,<b>Nav</b>,<b>Header</b>组件通常一起使用，但不是强关联，都可以单独使用
            3. 详细内容查阅<HashLink href="#api">api</HashLink>
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
                name: "showLeft",
                description: "是否显示左侧",
                type: "bool",
                default: ""
              },
              {
                name: "leftSize",
                description:
                  "左侧大小, 若使用 Nav 组件, 请和 nav 的 size 保持一致",
                type: "string",
                default: ""
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Layout;
