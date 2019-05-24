import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { pop } from "wowjoy-component/es/tools";
import { ReactComponent as LoadingBase } from "../../static/medias/svg/loading_shulan.svg";
import { ReactComponent as Success } from "../../static/medias/svg/done_line.svg";
import { ReactComponent as Error } from "../../static/medias/svg/wrong_line.svg";
import { ReactComponent as Warning } from "../../static/medias/svg/waring_line.svg";
import { ReactComponent as Info } from "../../static/medias/svg/information_line.svg";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

const animation = css`
  animation: ${rotate} 1s linear infinite;
`;
const Wrap = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  padding: 16px 30px;
  color: #fff;
  font-size: 13px;
  white-space: nowrap;
`;
const LoadingContent = styled.div`
  text-align: center;
  font-size: 17px;
  color: ${p => (p.haveLayer ? "#fff" : "#000")};
`;
const Loading = styled(LoadingBase)`
  display: block;
  width: 24px;
  height: 24px;
  ${animation} margin: 12px auto;
`;

const MsgContent = styled.div`
  height: 52px;
  padding: 0 60px;
  font-size: 12px;
  border-radius: 3px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.color};
  color: #fff;
  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    path {
      fill: #fff;
    }
  }
`;

class Toast extends PureComponent {
  static open = (name, content, options) => {
    const symbol = Symbol.for(name);
    Toast[symbol] = pop(<Toast>{content}</Toast>)({
      layer: false,
      autoClose: 500,
      onClose: () => {
        Toast[symbol] && Toast[symbol].destroy();
      },
      ...options
    });
    return Toast[symbol];
  };
  static loading = (options = {}) =>
    pop([
      <LoadingContent key={0} haveLayer={options.layer !== false}>
        {options.content}
      </LoadingContent>,
      <Loading key={1} />
    ])({
      layer: true,
      ...options
    });

  static success = (content, options = {}) =>
    pop(
      <MsgContent color={"#3ac9a8"}>
        <Success />
        {content}
      </MsgContent>
    )({
      layer: false,
      autoClose: 3000,
      ...options
    });
  static error = (content, options = {}) =>
    pop(
      <MsgContent color={"#f36969"}>
        <Error />
        {content}
      </MsgContent>
    )({
      layer: false,
      autoClose: 3000,
      ...options
    });
  static warning = (content, options = {}) =>
    pop(
      <MsgContent color={"#ff9b54"}>
        <Warning />
        {content}
      </MsgContent>
    )({
      layer: false,
      autoClose: 3000,
      ...options
    });
  static info = (content, options = {}) =>
    pop(
      <MsgContent color={"#45a8e6"}>
        <Info />
        {content}
      </MsgContent>
    )({
      layer: false,
      autoClose: 3000,
      ...options
    });
  render() {
    const { className, defaultStyles, children } = this.props;
    return (
      <Wrap className={className} defaultStyles={defaultStyles}>
        {children}
      </Wrap>
    );
  }
}

Toast.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string
};
export default Toast;
