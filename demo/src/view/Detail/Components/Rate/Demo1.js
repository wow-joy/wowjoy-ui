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