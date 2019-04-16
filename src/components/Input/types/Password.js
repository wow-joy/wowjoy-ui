import React, { PureComponent } from "react";
import Input from "../Input.js";
import PropTypes from "prop-types";
import styled from "styled-components";

const PasswordView = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  background: #000;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &.visible {
    background: #ff4499;
  }
`;

const TEXT = {
  hide: "隐藏密码",
  show: "显示密码"
};

class Password extends PureComponent {
  state = {
    visible: false
  };
  get TEXT() {
    if (this.props.TEXT) {
      return {
        ...TEXT,
        ...this.props.TEXT
      };
    }
    return TEXT;
  }
  clickHandle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  render() {
    const { children, visibleControl } = this.props;
    const { visible } = this.state;
    const { TEXT } = this;
    const props = { ...this.props };
    Reflect.deleteProperty(props, "children");
    Reflect.deleteProperty(props, "visibleControl");
    return (
      <Input type={!visible ? "password" : "text"} {...props}>
        {children}
        {visibleControl && (
          <PasswordView
            title={visible ? TEXT.hide : TEXT.show}
            className={
              "wj-input-password__control " + (visible ? "visible" : "")
            }
            onClick={this.clickHandle}
          />
        )}
      </Input>
    );
  }
}

Password.propTypes = {
  visibleControl: PropTypes.bool
};
export default Password;
