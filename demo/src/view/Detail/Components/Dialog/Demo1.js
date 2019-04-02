import React, { PureComponent } from "react";
import { Dialog  , DialogDark, DialogConfirm } from "@es";
import styled from "styled-components";

const Btn = styled.button`
  padding: 4px 6px;
  margin: 0 10px;
`

class Demo1 extends PureComponent {
  state = {
    visible1: false,
    visible2: false,
    visible3: false
   };
  open = index => () => {
    console.log(index)
    this.setState({
      ['visible' + index]: true,
    });
  };
  close = index => () => {
    this.setState({
      ['visible' + index]: false,
    })
  };
  render() {
    return (
      <div>
        <Btn onClick={this.open(1)}>点我打开弹框</Btn>
        <Dialog
          onClose={this.close(1)}
          visible={this.state.visible1}
          {...this.props}
        >
          普通弹框
        </Dialog>
        <Btn onClick={this.open(2)}>点我打开深色header的弹框</Btn>
        <DialogDark
          onClose={this.close(2)}
          visible={this.state.visible2}
          {...this.props}
        >
          深色header的弹框
        </DialogDark>
        <Btn onClick={this.open(3)}>点我打开Confirm弹框</Btn>
        <DialogConfirm
          onClose={this.close(3)}
          visible={this.state.visible3}
          {...this.props}
        >
          Confirm弹框
        </DialogConfirm>
      </div>
    );
  }
}

export default Demo1