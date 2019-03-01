import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import None from "./None";
import { ReactComponent as Go } from "../../static/medias/svg/go.svg";
import { Link, withRouter } from "react-router-dom";
import Toast from "../Toast";
const Wrap = styled.div`
  width: 300px;
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
const Frame = styled.iframe`
  position: absolute;
  z-index: -2;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

const List = styled.ul`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 0;
  width: 100%;
  box-sizing: content-box;
`;
const App = styled.li`
  position: relative;
  color: #666;
  font-size: 14px;
  text-align: center;
  width: 24%;
  margin: 20px 3.5%;
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 7%;
  }
  &:nth-child(3n + 1) {
    margin-left: 7%;
  }
  img {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
  }
  p {
    margin-top: 12px;
    line-height: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
const TEXT = {
  viewMore: "查看更多系统 ",
  none: "暂无应用"
};

class AppList extends PureComponent {
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
  gotoOtherApp = baseUrl => () => {
    const url = "https://" + baseUrl;
    this.beforeOpen(url).then(res => {
      const nodeA = document.createElement("a");
      nodeA.href = url;
      nodeA.target = "_blank";
      nodeA.setAttribute("rol", "noopener noreferrer");
      nodeA.click();
    });
  };
  beforeOpen = url =>
    new Promise(res => {
      if (this.isCacheUrl(url)) {
        res();
        return;
      }
      this.frame.src = url;
      const loading = Toast.loading({
        container: this.wrap
      });
      setTimeout(() => {
        this.cacheUrl(url);
        loading.destroy();
        res();
      }, 3000);
    });
  isCacheUrl = url => {
    const viewedUrl = sessionStorage.getItem("viewedUrl") || [];
    if (viewedUrl.includes(url)) {
      return true;
    }
    return false;
  };
  cacheUrl = url => {
    const viewedUrl = sessionStorage.getItem("viewedUrl") || [];
    if (!this.isCacheUrl(url)) {
      viewedUrl.push(url);
      sessionStorage.setItem("viewedUrl", JSON.stringify(viewedUrl));
    }
  };

  render() {
    const { list: appList = [], moreLink } = this.props;
    const { TEXT } = this;
    return (
      <Wrap className={"wj-header-dropdown__app"} ref={el => (this.wrap = el)}>
        <Frame ref={el => (this.frame = el)} />
        {appList.length > 0 ? (
          <List>
            {appList.map((ele, index) => (
              <App
                key={index}
                title={ele.title}
                id={ele.id}
                // onClick={this.gotoOtherApp(ele.to)}
              >
                <a
                  to={"https://" + ele.to}
                  target={"_blank"}
                  rol={"noreferrer noopener"}
                >
                  <img src={ele.icon} />
                  <p>{ele.title}</p>
                </a>
              </App>
            ))}
          </List>
        ) : (
          <None>{TEXT.none}</None>
        )}

        <Footer href={moreLink} target={"_blank"} rol={"noreferrer noopener"}>
          {TEXT.viewMore}
          <Go />
        </Footer>
      </Wrap>
    );
  }
}

AppList.propTypes = {
  TEXT: PropTypes.object,
  list: PropTypes.array,
  moreLink: PropTypes.string
};

export default withRouter(AppList);
