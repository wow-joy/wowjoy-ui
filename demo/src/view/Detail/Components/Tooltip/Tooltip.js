import React, { PureComponent } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";

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

class Tooltip extends PureComponent {
    render(){
        const demoList = [
            {
              display: <Demo1 />,
              description: "常规使用",
              code: `
              import React, { Component } from "react";
              import { Tooltip } from "@es";
              
              class Demo1 extends Component {
              
                  render() {
                    return (
                      <div>
                        <Tooltip title='啊啊啊啊' placement='up'>提示</Tooltip>
                        <Tooltip title='啊啊啊啊' placement='down'>提示</Tooltip>
                        <Tooltip title='啊啊啊啊' placement='left'>提示</Tooltip>
                        <Tooltip title='啊啊啊啊' placement='right'>提示</Tooltip>
                      </div>
                    );
                  }
                }
                
                export default Demo1;
            `
            },
          ];
        return(
       <DetailTemp title={"Tooltip"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. Tooltip提示框
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
                name: "title",
                description: "提示内容",
                type: "string",
                default: ""
              },
              {
                name: "placement",
                description: "提示的位置",
                type: "string",
                default: "up"
              }
            ]}
          />
        </Apis>

      </DetailTemp>
        )
    }
}



export default Tooltip;