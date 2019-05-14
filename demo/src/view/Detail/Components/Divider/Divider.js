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

class Divider extends PureComponent {
    render(){
        const demoList = [
            {
              display: <Demo1 />,
              description: "常规使用",
              code: `
              import React, { Component } from "react";
              import { Divider } from "@es";
              
              class Demo1 extends Component{
              
                  render(){
                      return(
                          <div>
                            <Divider />
                            <Divider title='demo'/>
                            <Divider title='demo' dashed={true}/>
                            <Divider title='demo' orientation='left'/>
                            <Divider title='demo' orientation='right'/>
                          </div>
                      )
                  }
              }
              
              export default Demo1;
            `
            },
          ];
        return(
       <DetailTemp title={"Divider"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. Divider分割线
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
                name: "dashed",
                description: "是否虚线",
                type: "bool",
                default: "false"
              },
              {
                name: "orientation",
                description: "标题位置",
                type: "string",
                default: "center"
              },
              {
                name: "title",
                description: "标题",
                type: "string",
                default: ""
              }
            ]}
          />
        </Apis>

      </DetailTemp>
        )
    }
}



export default Divider;