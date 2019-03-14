import React, { Component } from "react";
import styled from "styled-components";
import { CheckBox as CheckBoxBase } from "wowjoy-component";
const Wrap = styled(CheckBoxBase)`
  margin-right: 10px;
  color: ${p => p.theme.mainColor};
  transition: 0.3s;
  &:hover {
    border-color: currentColor;
  }
  &:active {
    border-color: currentColor;
    box-shadow: 0 0 2px currentColor, inset 0 0 6px currentColor;
  }
  &.active {
    border-color: currentColor;
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 8px;
      height: 5px;
      border-left: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      transform-origin: 30% 50%;
    }
  }
  &.half-active {
    border-color: currentColor;
    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      width: 8px;
      height: 2px;
      background: currentColor;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
class CheckBox extends React.PureComponent {
  ClickHandle = e => {
    const { value = "", onChange } = this.props;
    onChange(value === "checked" ? "" : "checked", e);
  };
  render() {
    const { value = "" } = this.props;
    return <Wrap {...this.props} />;
  }
}
// CheckBox.prototype[Symbol.for("wj_inputType")] = "checkBox";
export default CheckBox;
