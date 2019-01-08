import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Wrap = styled.div`
  width: 285px;
`;
const Header = styled.h4`
  background: #f5f7f8;
  font-size: 14px;
  color: #333;
  padding-left: 20px;
  line-height: 40px;
  height: 40px;
  cursor: default;
`;
const Footer = styled.div`
  background: #f5f7f8;
  font-size: 12px;
  color: #999;
  line-height: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
`;
const List = styled.ul``;
const Msg = styled.li`
  position: relative;
  color: #666;
  height: 64px;
  font-size: 14px;
  padding: 15px 20px;
  padding-left: 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1;
  h6 {
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    color: #999;
    font-size: 12px;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 8px;
    right: 8px;
    border-bottom: 1px dashed #ccc;
  }
  &:last-child::after {
    content: none;
    display: none;
  }
`;
const TEXT = {
  title: "消息通知",
  justNow: "刚刚",
  minutesAgo: "分钟前",
  hoursAgo: "小时前",
  gotoMsgCenter: "进入消息中心 >>"
};

class MsgList extends PureComponent {
  get TEXT() {
    const { TEXT: propTEXT } = this.props;
    if (propTEXT) {
      return {
        ...TEXT,
        ...propTEXT
      };
    }
    return TEXT;
  }
  render() {
    const { list: msgList, currentDate, gotoMsgCenter } = this.props;
    const { TEXT } = this;
    return (
      <Wrap className={"wj-header-dropdown-msg"}>
        <Header>{TEXT.title}</Header>
        <List>
          {msgList.map((ele, index) => (
            <Msg key={index} onClick={ele.onClick}>
              <h6>{ele.content}</h6>
              <p>{getDeltaTime(currentDate, ele.time)}</p>
            </Msg>
          ))}
        </List>
        <Footer onClick={gotoMsgCenter}>{TEXT.gotoMsgCenter}</Footer>
      </Wrap>
    );
  }
}
function getDeltaTime(localDate, loadDate) {
  const deltaT = localDate.valueOf() - loadDate.valueOf();
  if (deltaT < 60000) {
    return TEXT.justNow;
  }
  if (deltaT < 3600000) {
    return parseInt(deltaT / 60000) + TEXT.minutesAgo;
  }
  if (deltaT < 3600000 * 24) {
    return parseInt(deltaT / 3600000) + TEXT.hoursAgo;
  }
  return loadDate.toLocaleDateString().replace(/\//g, ".");
}

MsgList.propTypes = {
  TEXT: PropTypes.object,
  list: PropTypes.array,
  currentDate: PropTypes.object,
  gotoMsgCenter: PropTypes.func
};

export default MsgList;
