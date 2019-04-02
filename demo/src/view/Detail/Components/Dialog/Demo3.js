import React, { PureComponent } from "react";
import { Dialog } from "@es";
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
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Btn onClick={this.open}>点我打开弹框</Btn>
        <Dialog
          title={"2s后关闭"}
          onClose={this.close}
          visible={this.state.visible}
          btnsText={[]}
          autoClose={2000}
          layer={false}
          showCloseBtn={false}
        >
          2s后关闭
        </Dialog>
      </div>
    );
  }
}

export default Demo1;
