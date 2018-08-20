import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { ReactComponent as Password } from "../../static/medias/svg/password.svg";
import { ReactComponent as LogOut } from "../../static/medias/svg/log_out.svg";

const Wrap = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: ${p => p.theme.mainColor};
  padding: 0 21px 0 27px;
  color: ${p => p.theme.fontColor};
  ${p => (p.isblur ? `box-shadow: 0 1px 3px 0 rgba(225,225,225,0.50);` : ``)};
  ${p => p.defaultStyles};
`;
const Left = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
const OpenIcon = styled(require("../../static/medias/svg/nav_open.svg").ReactComponent)`
  width: 18px;
  height: auto;
  cursor: pointer;
  path {
    fill: ${p => p.theme.fontColor};
  }
`;
const CloseIcon = styled(require("../../static/medias/svg/nav_close.svg").ReactComponent)`
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
`;
const Center = styled.div`
  flex-grow: 1;
  margin-left: 53px;
  margin-right: 108px;
`;
const Right = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
const WowjoyIcon = styled(require("../../static/medias/svg/wowjoy_logo.svg").ReactComponent)`
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
  margin-left: 26px;
  margin-right: 22px;
`;
const NewsIcon = styled(require("../../static/medias/svg/news.svg").ReactComponent)`
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
  top: 0;
  transform: translate(50%, -50%) scale(0.5, 0.5);
  width: 24px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  background: #f36969;
  border-radius: 50%;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;
const User = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  z-index: 0;
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
  ${p =>
    p.hasHoverEvent
      ? `
      cursor: pointer;
      height: 48px;
      margin-bottom: -16px;
    `
      : null};
`;
const UserControlWrap = styled.div.attrs({
  onAnimationStart: p => e => (e.target.style.display = "block"),
  onAnimationEnd: p => {
    return e => {
      e.target.style.display = p.visible ? "block" : "none";
    };
  }
})`
  cursor: auto;
  display: none;
  opacity: 0;
  width: 200px;
  overflow: hidden;
  box-shadow: 0 1px 4px 0 rgba(132, 132, 132, 0.5);
  position: absolute;
  top: 48px;
  right: 0;
  background: #fff;
  transform-origin: 98% -20px;
  ${p =>
    p.visible
      ? `
      display: block !important;
      animation: ${fadeIn} 0.4s forwards;
    `
      : `
      animation: ${fadeOut} 0.4s forwards;
    `};
`;
const UserInfo = styled.div`
  background: #f5f7f8;
  height: 76px;
  padding: 9px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #666;
    font-size: 12px;
    line-height: 14px;
    margin-top: 9px;
  }
`;

const UserControl = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #333;
    line-height: 14px;
    font-size: 12px;
    cursor: pointer;
    svg {
      margin-right: 9px;
      width: 16px;
      height: auto;
      path {
        fill: #666;
      }
    }
  }
`;

class Header extends PureComponent {
  state = {
    userControlVisible: false,
    isOpen:
      this.props.defaultValue !== undefined ? this.props.defaultValue : true
  };

  render() {
    const {
      className,
      defaultStyles,
      children,
      logo,
      title,
      newsCount,
      user,
      theme,
      isblur
    } = this.props;
    const userLastName = user? user.name.substr(-1) : "";
    const defaultTheme = isblur
      ? {
          mainColor: "#fff",
          fontColor: "#06aea6"
        }
      : {
          mainColor: "#06aea6",
          fontColor: "#fff"
        };
    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Wrap
          defaultStyles={defaultStyles}
          className={className}
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
            <WowjoyIcon />
            <NewsIconBox>
              <NewsIcon />
              <Badge count={newsCount}> {newsCount}</Badge>
            </NewsIconBox>
            <User
              deep
              isblur={isblur}
              hasHoverEvent
              onMouseEnter={this.showUserControl}
              onMouseLeave={this.hideUserControl}
            >
              {userLastName}
              <UserControlWrap visible={this.state.userControlVisible}>
                <UserInfo>
                  <User>{userLastName}</User>
                  <p>
                    {
                      user?`${user.name} (${user.number})`:null
                    }
                  </p>
                </UserInfo>
                <UserControl>
                  <span onClick={this.changePassword}>
                    <Password />
                    修改密码
                  </span>
                  <span onClick={this.logOut}>
                    <LogOut />
                    退出登陆
                  </span>
                  <form
                    action="/logout"
                    method="post"
                    ref={el => {
                      this.logOutForm = el;
                    }}
                    style={{ display: "none" }}
                  >
                    <input
                      name="_csrf"
                      value={window._csrf && window._csrf.token}
                    />
                    <input
                      name="_csrf_header"
                      value={window._csrf && window._csrf.name}
                    />
                  </form>
                </UserControl>
              </UserControlWrap>
            </User>
          </Right>
        </Wrap>
      </ThemeProvider>
    );
  }

  userControlHideTimer;
  showUserControl = e => {
    clearTimeout(this.userControlHideTimer);
    this.setState({
      userControlVisible: true
    });
  };

  hideUserControl = () => {
    this.userControlHideTimer = setTimeout(
      () =>
        this.setState({
          userControlVisible: false
        }),
      1000
    );
  };

  onChange = () => {
    this.props.onChange && this.props.onChange(!this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logOutForm;
  logOut = () => {
    this.logOutForm.submit();
  };
  
  changePassword = () =>{
    console.log('unset event')
  }
}

Header.propTypes = {
  className: PropTypes.string,
  defaultStyles: PropTypes.string,
  logo: PropTypes.node,
  title: PropTypes.node,
  newsCount: PropTypes.number,
  user: PropTypes.object,
  theme: PropTypes.object,
  isblur: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.bool
};
export default Header;
