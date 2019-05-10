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

class Rate extends PureComponent {
    render(){
        const demoList = [
            {
              display: <Demo1 />,
              description: "常规使用",
              code: `
              import React, { Component } from "react";
              import { Rate } from "@es";
              
              class Demo1 extends Component{
              
                  handleSelectRate =(value)=>{
                      alert(value)
                  }
                  
                  render(){
                      return(
                          <Rate 
                          canClick={true}
                          rateNum={5}
                          handleSelectRate={this.handleSelectRate}
                          rateValue={0}
                          size='30px'
                          color='#06aea6'
                          />
                      )
                  }
              }
              
              export default Demo1;
            `
            },
          ];
        return(
       <DetailTemp title={"Rate"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. Rate评分
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
                name: "canClick",
                description: "能否点击",
                type: "bool",
                default: ""
              },
              {
                name: "rateNum",
                description: "总共星数",
                type: "number",
                default: ""
              },
              {
                name: "handleSelectRate",
                description: "点击事件",
                type: "function",
                default: ""
              },
              {
                name: "rateValue",
                description: "初始星数",
                type: "number",
                default: ""
              },
              {
                name: "size",
                description: "尺寸大小",
                type: "string",
                default: ""
              },
              {
                name: "color",
                description: "颜色",
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



export default Rate;