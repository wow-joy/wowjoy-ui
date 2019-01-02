import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { pop } from "wowjoy-component/lib/tools";
import { ReactComponent as LoadingBase } from "../../static/medias/svg/loading.svg";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
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
  animation: ${rotate} 1s linear infinite;
  margin: 12px auto;
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
  static loading = options =>
    pop([
      <LoadingContent key={0} haveLayer={options.layer !== false}>
        {options.content}
      </LoadingContent>,
      <Loading key={1} />
    ])({
      layer: true,
      ...options
    });
  render() {
    const { className, defaultStyles, children } = this.props;
    return <Wrap className={className}>{children}</Wrap>;
  }
}

Toast.prototype = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string
};
export default Toast;
