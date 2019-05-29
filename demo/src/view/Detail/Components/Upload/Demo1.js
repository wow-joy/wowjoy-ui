import React, { Component } from "react";
import { Upload } from "@es";

class Demo1 extends Component {

    render() {
      return (
        <Upload 
          action='http://127.0.0.1:3001/file/upload'
        />
      );
    }
  }
  
  export default Demo1;