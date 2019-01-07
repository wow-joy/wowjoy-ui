import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Wrong } from "../../static/medias/svg/wrong.svg";
const Wrap = styled.div`
  display: flex;
  position: relative;
  overflow: visible;
  width: 355px;
  height: 36px;
  background: #fff;
  flex-wrap: wrap;
  &.wrap__error {
    margin-bottom: 40px;
  }
  ${props => props.defaultStyles};
`;
const InputBase = styled.input`
  flex-grow: 1;
  height: 100%;
  padding: 11px 8px;
  border: none;
  color: #333;
  caret-color: #787878;
  border: 1px solid #dbdbdb;
  font-size: 12px;
  &::-webkit-input-placeholder {
    color: #999;
  }
  &:focus {
    border-color: #53bde7;
  }
  &:disabled {
    border-color: #e8e8e8;
    background: #f7f7f7;
    color: #ccc;
    cursor: not-allowed;
  }
  &.base__error {
    border-color: #f36969;
    background: #fffcfa;
    color: #f36969;
  }
`;
const Error = styled.div`
  position: absolute;
  top: 100%;
  padding: 13px 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: #f36969;
  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;
class Input extends PureComponent {
  render() {
    const { className, defaultStyles, children, errorMsg } = this.props;
    const props = { ...this.props };
    Reflect.deleteProperty(props, "className");
    Reflect.deleteProperty(props, "defaultStyles");
    Reflect.deleteProperty(props, "children");
    Reflect.deleteProperty(props, "errorMsg");
    Reflect.deleteProperty(props, "viewType");
    Reflect.deleteProperty(props, "TEXT");
    console.log(errorMsg ? "base__error" : "");
    return (
      <Wrap
        defaultStyles={defaultStyles}
        className={
          "wj-input-wrap " + (errorMsg ? "wrap__error " : "") + className
        }
      >
        <InputBase
          className={"wj-input-base " + (errorMsg ? "base__error" : "")}
          {...props}
        />
        {children}
        {errorMsg && (
          <Error className={"wj-input-msg__error"}>
            <Wrong />
            {errorMsg}
          </Error>
        )}
      </Wrap>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  errorMsg: PropTypes.string,
  viewType: PropTypes.oneOf(["captcha", "password", "search"]),
  TEXT: PropTypes.object
};
export default Input;
