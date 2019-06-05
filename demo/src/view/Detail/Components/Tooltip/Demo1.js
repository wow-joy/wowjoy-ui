import React, { Component } from "react";
import { Tooltip } from "@es";
import styled from "styled-components";

const  Tool = styled(Tooltip)`
    width:50px;
    margin:0 50px;
    position: relative;
    display: inline-block;
    border:1px solid #06aea6;
    border-radius:3px;
`;

class Demo1 extends Component {

    render() {
      return (
        <div>
          <Tool title='啊啊啊啊' placement='up'>提示</Tool>
          <Tool title='啊啊啊啊' placement='down'>提示</Tool>
          <Tool title='啊啊啊啊' placement='left'>提示</Tool>
          <Tool title='啊啊啊啊' placement='right'>提示</Tool>
        </div>
      );
    }
  }
  
  export default Demo1;