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