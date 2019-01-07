import React, { PureComponent } from "react";
import Input from "../Input.js";
import PropTypes from "prop-types";
import styled from "styled-components";

const SendCaptcha = styled.div`
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${p => (p.isCounting ? "#ccc" : p.theme.mainColor)};
`;

const TEXT = {
  sendCaptcha: "发送验证码",
  sended: "已发送",
  unsetEvent: "未设置sendCaptcha事件",
  second: "s",
};

class Captcha extends PureComponent {
  state = {
    captchaCount: false
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
  sendCaptcha = () => {
    const { sendCaptcha } = this.props;
    if (!sendCaptcha) {
      console.error(
        "sendCaptcha must be seted as a function. \n" + this.TEXT.unsetEvent
      );
      return;
    }
    sendCaptcha()
      .then(() => {
        this.reduceCount();
        this.timer = setInterval(this.reduceCount, 1000);
      })
      .catch(rej => {
        console.error(rej);
      });
  };
  reduceCount = () => {
    const { captchaCount: count } = this.state;
    const { maxCount } = this.props;
    if (count === 0) {
      clearInterval(this.timer);
      this.setState({
        captchaCount: false
      });
    } else {
      this.setState({
        captchaCount: count ? count - 1 : maxCount
      });
    }
  };
  render() {
    const { children } = this.props;
    const { captchaCount } = this.state;
    const { TEXT } = this;
    const props = { ...this.props };

    Reflect.deleteProperty(props, "children");
    return (
      <Input {...props}>
        {children}
        <SendCaptcha
          className={"wj-input-captcha__send"}
          onClick={captchaCount === false ? this.sendCaptcha : undefined}
          isCounting={captchaCount !== false}
        >
          {captchaCount === false
            ? TEXT.sendCaptcha
            : ` ${TEXT.sended}${captchaCount}`+ TEXT.second}
        </SendCaptcha>
      </Input>
    );
  }
}

Captcha.propTypes = {
  maxCount: PropTypes.number,
  sendCaptcha: PropTypes.func
};
export default Captcha;
