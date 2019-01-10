import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import { ReactComponent as NavOpen } from "../../static/medias/svg/nav_open.svg";
import { ReactComponent as NavClose } from "../../static/medias/svg/nav_close.svg";
import { ReactComponent as WowjoyLogo } from "../../static/medias/svg/wowjoy_logo.svg";
import { ReactComponent as News } from "../../static/medias/svg/news.svg";
import { ControllSwitchHoc } from "wowjoy-component/es/tools";
import NewsList from "./NewsList";
import AppList from "./AppList";
import UserInfo from "./UserInfo";
const Wrap = styled.header`
  display: flex;
  align-items: center;
  background: ${p => p.theme.mainColor};
  padding: 0 21px 0 27px;
  color: ${p => p.theme.fontColor};
  height: 64px;
  ${p => (p.isblur ? `box-shadow: 0 1px 3px 0 rgba(225,225,225,0.50);` : ``)};
  ${p => p.defaultStyles};
`;
const Left = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  & > span {
    font-size: 0;
    svg {
      vertical-align: middle;
    }
  }
`;
const OpenIcon = styled(NavOpen)`
  width: 18px;
  height: auto;
  cursor: pointer;
  path {
    fill: ${p => p.theme.fontColor};
  }
`;
const CloseIcon = styled(NavClose)`
  width: 18px;
  height: auto;
  cursor: pointer;
  path {
    fill: ${p => p.theme.fontColor};
  }
`;

const Logo = styled.img`
  width: 117px;
  height: auto;
  margin-left: 34px;
  display: inline-block;
  user-select: none;
`;

const Title = styled.h1`
  display: inline-block;
  font-size: 18px;
  margin-left: 18px;
  border-left: 1px solid ${p => p.theme.fontColor};
  padding-left: 19px;
  height: 23px;
  line-height: 23px;
  color: #fff;
`;
const Center = styled.div`
  flex-grow: 1;
  margin-left: 53px;
  margin-right: 108px;
`;
const Right = styled.ul`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100%;
  & > li {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    position: relative;
    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.2);
      & > .wj-header-dropdown {
        z-index: 10;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

const ControlWrap = styled.div.attrs({ className: "wj-header-dropdown" })`
  cursor: auto;
  opacity: 0;
  transform: scale(0);
  box-shadow: 0 1px 4px 0 rgba(132, 132, 132, 0.5);
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  transform-origin: 100% 0;
  z-index: -1;
  transition: 0.3s linear;
`;
const WowjoyIcon = styled(WowjoyLogo)`
  width: 22px;
  height: auto;
  path {
    fill: ${p => p.theme.fontColor};
  }
`;
const NewsIconBox = styled.span`
  width: 20px;
  position: relative;
  display: inline-block;
  svg {
    vertical-align: middle;
  }
`;
const NewsIcon = styled(News)`
  width: 20px;
  height: auto;
  path {
    fill: ${p => p.theme.fontColor};
  }
`;
const Badge = styled.i`
  display: ${p => (p.count ? "block" : "none")};
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10px;
  transform: translate(50%, -50%);
  padding: 0 5px;
  font-size: 12px;
  line-height: 16px;
  height: 16px;
  text-align: center;
  color: #fff;
  background: #f36969;
  border-radius: 8px;
`;
const User = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  z-index: 11;
  color: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 32px;
    border-radius: 50%;
    background-color: ${p => (!p.deep || p.isblur ? "#06aea6" : "#007872")};
    z-index: -1;
  }
`;
class Header extends PureComponent {
  state = {
    isOpen:
      this.props.defaultValue !== undefined ? this.props.defaultValue : true
  };

  get newsCount() {
    return (this.props.newsList || []).length;
  }
  render() {
    const {
      className,
      defaultStyles,
      children,
      logo,
      title,
      appList,
      newsList,
      user,
      theme,
      isblur,
      companyList,
      company,
      onCompanyChange,
      onChangePassword,
      onUserNameClick
    } = this.props;
    const defaultTheme = isblur
      ? {
          mainColor: "#fff",
          fontColor: "#06aea6"
        }
      : {
          mainColor: "#06aea6",
          fontColor: "#fff"
        };
    const userLastName = user ? user.name.substr(-1) : "";

    const UserInfoProps = {
      onCompanyChange,
      onChangePassword,
      onUserNameClick,
      user,
      companyList,
      company,
      userLastName
    };
    const { newsCount } = this;
    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Wrap
          defaultStyles={defaultStyles}
          className={"wj-header-wrap " + className}
          isblur={isblur}
        >
          <Left>
            <span onClick={this.onChange}>
              {this.state.isOpen ? <CloseIcon /> : <OpenIcon />}
            </span>
            <Logo
              src={
                logo ||
                require(isblur
                  ? "../../static/medias/images/shulan-green.png"
                  : "../../static/medias/images/shulan-white.png")
              }
            />
            <Title>{title}</Title>
          </Left>
          <Center>{children}</Center>
          <Right>
            <li>
              <WowjoyIcon />
              {
                <ControlWrap>
                  <AppList list={appList} />
                </ControlWrap>
              }
            </li>
            <li>
              <NewsIconBox>
                <NewsIcon />
                <Badge count={newsCount}> {newsCount}</Badge>
              </NewsIconBox>
              {
                <ControlWrap>
                  <NewsList list={newsList} currentDate={new Date()} />
                </ControlWrap>
              }
            </li>
            <li>
              <User deep isblur={isblur}>
                {userLastName}
              </User>
              <ControlWrap className={"wj-user-control__wrap"}>
                <UserInfo {...UserInfoProps} />
              </ControlWrap>
            </li>
          </Right>
        </Wrap>
      </ThemeProvider>
    );
  }

  onChange = e => {
    this.props.onChange && this.props.onChange(e, !this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

Header.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  logo: PropTypes.node,
  title: PropTypes.node,
  appList: PropTypes.array,
  newsList: PropTypes.array,
  newsCount: PropTypes.number,
  user: PropTypes.object,
  theme: PropTypes.object,
  isblur: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.bool,
  company: PropTypes.string,
  defaultCompany: PropTypes.string,
  companyList: PropTypes.array,
  onCompanyChange: PropTypes.func,
  onUserNameClick: PropTypes.func,
  onChangePassword: PropTypes.func
};
export default ControllSwitchHoc({
  onChange: "onCompanyChange",
  value: "company",
  defaultValue: "defaultCompany"
})(Header);
