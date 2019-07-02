import React, { PureComponent } from "react";
import { Toast, Btn1 } from "@src";

class Demo1 extends PureComponent {
  toastCollecter = {};
  open = name => () => {
    this.toastCollecter[name] = Toast.open("open content", {
      autoClose: false,
      onClose: () => {}
    });
  };
  show = name => () => {
    this.toastCollecter[name].show();
  };
  hide = name => () => {
    this.toastCollecter[name].hide();
  };
  destroy = name => () => {
    this.toastCollecter[name].destroy();
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.open("toast1")}>open a new toast</Btn1>
        <Btn1 onClick={this.show("toast1")}>show toast</Btn1>
        <Btn1 onClick={this.hide("toast1")}>hide toast</Btn1>
        <Btn1 onClick={this.destroy("toast1")}>destroy toast</Btn1>
      </div>
    );
  }
}

export const code = `
class Demo1 extends PureComponent {
  toastCollecter = {};
  open = name => () => {
    this.toastCollecter[name] = Toast.open("open content", {
      autoClose: false,
      onClose: () => {}
    });
  };
  show = name => () => {
    this.toastCollecter[name].show();
  };
  hide = name => () => {
    this.toastCollecter[name].hide();
  };
  destroy = name => () => {
    this.toastCollecter[name].destroy();
  };
  render() {
    return (
      <div>
        <Btn1 onClick={this.open("toast1")}>open a new toast</Btn1>
        <Btn1 onClick={this.show("toast1")}>show toast</Btn1>
        <Btn1 onClick={this.hide("toast1")}>hide toast</Btn1>
        <Btn1 onClick={this.destroy("toast1")}>destroy toast</Btn1>
      </div>
    );
  }
}
`;

export default Demo1;
