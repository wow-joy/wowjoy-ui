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