import React, { PureComponent } from "react";
import { Dialog, Btn1, Btn2, Btn3, BtnDisabled } from "@es";
import styled from "styled-components";

const Btn = styled.button`
  padding: 4px 6px;
  margin: 0 10px;
`;

class Demo1 extends PureComponent {
  state = {
    visible: false
  };
  open = () => {
    this.setState({
      visible: true
    });
  };
  close = () => {
    alert("弹框将被关闭");
    this.setState({
      visible: false
    });
  };
  clickHandle = (event, index) => {
    alert("点击了第" + index + "个按钮");
  };

  render() {
    return (
      <div>
        <Btn onClick={this.open}>点我打开弹框</Btn>
        <Dialog
          title={"这是标题"}
          onClose={this.close}
          visible={this.state.visible}
          onBtnsClick={this.clickHandle}
          btnsText={["按钮1", "按钮2", "按钮3", "按钮4"]}
          btns={[Btn1, Btn2, Btn3, BtnDisabled]}
        >
          点击按钮触发事件
        </Dialog>
      </div>
    );
  }
}

export default Demo1;
