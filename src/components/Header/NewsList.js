import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Go from "../../components/icons/go";
import MsgBase from "../../components/icons/msg";
import TimeBase from "../../components/icons/time";
import { Link } from "react-router-dom";
import None from "./None";

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
const Footer = styled.a`
  display: block;
  background: #f5f7f8;
  font-size: 12px;
  color: #999;
  line-height: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  & > svg {
    width: 10px;
    height: 10px;
    path {
      fill: #999;
    }
  }
`;
const List = styled.ul``;
const News = styled.li`
  list-style: none;
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
  cursor: pointer;
  & > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  h6 {
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    color: #999;
    font-size: 12px;
    display: flex;
    align-items: center;
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
const Msg = styled(MsgBase)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
const Time = styled(TimeBase)`
  width: 10px;
  height: 10px;
  margin-right: 8px;
  path {
    fill: #999;
  }
`;
const TEXT = {
  title: "消息通知",
  justNow: "刚刚",
  minutesAgo: "分钟前",
  hoursAgo: "小时前",
  gotoMsgCenter: "进入消息中心 ",
  none: "暂无消息",
};

class NewsList extends PureComponent {
  get TEXT() {
    const { TEXT: propTEXT } = this.props;
    if (propTEXT) {
      return {
        ...TEXT,
        ...propTEXT,
      };
    }
    return TEXT;
  }
  render() {
    const { list: newsList = [], currentDate, moreLink } = this.props;
    const { TEXT } = this;
    return (
      <Wrap className={"wj-header-dropdown-news"}>
        <Header>{TEXT.title}</Header>
        {newsList.length > 0 ? (
          <List>
            {newsList.slice(0, 3).map((ele, index) => (
              <News key={index} onClick={ele.onClick} id={ele.id}>
                <a href={ele.to} target={"_blank"} rol={"noreferrer noopener"}>
                  <Msg />
                  <h6>{ele.content}</h6>
                  <p>
                    <Time />
                    {getDeltaTime(currentDate, ele.time)}
                  </p>
                </a>
              </News>
            ))}
          </List>
        ) : (
          <None>{TEXT.none}</None>
        )}
        <Footer href={moreLink} target={"_blank"} rol={"noreferrer noopener"}>
          {TEXT.gotoMsgCenter}
          <Go />
        </Footer>
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

NewsList.propTypes = {
  TEXT: PropTypes.object,
  list: PropTypes.array,
  currentDate: PropTypes.object,
  moreLink: PropTypes.string,
};

export default NewsList;
