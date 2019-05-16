import React, { Component } from "react";
import { Progress } from "@es";

class Demo1 extends Component {
    
    render() {
      return (
        <Progress 
          percent={15}
          strokeColor='#06aea6'
          showInfo={true}
        />
      );
    }
  }
  
  export default Demo1;