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

class Switch extends PureComponent {
    render(){
        const demoList = [
            {
              display: <Demo1 />,
              description: "常规使用",
              code: `
              import React, { Component } from "react";
              import { Switch } from "@es";
              
              class Demo1 extends Component {
                constructor(){
                  super();
                  this.state = {
                    checked:false
                  }
                }
              
                onChange = () => {
                  const {checked} = this.state
                  if(checked === false){
                    this.setState({
                      checked:true
                    })
                    //这里写打开按钮的事件
                  }else{
                    this.setState({
                      checked:false
                    })
                    //这里写关闭按钮后的事件
                  }
                };
              
                  render() {
                    const {checked} = this.state
                    return (
                      <Switch
                        checked={checked}
                        onChange={this.onChange}
                      />
                    );
                  }
                }
                
                export default Demo1;
            `
            },
          ];
        return(
       <DetailTemp title={"Switch"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. Switch开关
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
                name: "checked",
                description: "默认开启或关闭",
                type: "bool",
                default: ""
              },
              {
                name: "onClick",
                description: "点击事件",
                type: "function",
                default: ""
              }
            ]}
          />
        </Apis>

      </DetailTemp>
        )
    }
}



export default Switch;