import React, { Component } from "react";
import { Switch } from "@es";

class Demo1 extends Component {

  onChange = (e) => {
    alert(e)
  };

    render() {
      return (
        <Switch
          checked={false}
          onChange={this.onChange}
        />
      );
    }
  }
  
  export default Demo1;