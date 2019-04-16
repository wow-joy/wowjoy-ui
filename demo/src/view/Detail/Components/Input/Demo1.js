import React, { Component } from "react";
import { Input } from "@es";

class Demo1 extends Component {
  state = {
    text: ""
  };
  textChangeHandle = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <Input
          defaultStyles={`margin: 10px 0; 
            .wj-input-captcha__send {
              border: 1px solid #06aea6;
              width: 80px;
              justify-content: center;
            }
          `}
          viewType="captcha"
          sendCaptcha={() =>
            new Promise((res, rej) => {
              setTimeout(res, 1000);
            })
          }
          maxCount={10}
        />
        <Input defaultStyles="margin: 10px 0;" viewType="password"  />
        <Input
          defaultStyles="margin: 10px 0;"
          placeholder={"输入查看错误信息"}
          onChange={this.textChangeHandle}
          value={this.state.text}
          errorMsg={this.state.text}
        />
      </div>
    );
  }
}

export default Demo1;
