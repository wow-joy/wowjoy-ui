import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { ReactComponent as Password } from "../../static/medias/svg/password.svg";
import { ReactComponent as LogOut } from "../../static/medias/svg/log_out.svg";
import { ReactComponent as Selected } from "../../static/medias/svg/selected.svg";
import { ReactComponent as Company } from "../../static/medias/svg/company.svg";
import { ReactComponent as NavOpen } from "../../static/medias/svg/nav_open.svg";
import { ReactComponent as NavClose } from "../../static/medias/svg/nav_close.svg";
import { ReactComponent as WowjoyLogo } from "../../static/medias/svg/wowjoy_logo.svg";
import { ReactComponent as News } from "../../static/medias/svg/news.svg";
const Wrap = styled.header`
  display: flex;
  align-items: center;
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
const Right = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
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
  margin-left: 26px;
  margin-right: 22px;
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
  ${p =>
    p.hasHoverEvent
      ? `
      cursor: pointer;
      height: 48px;
      margin-bottom: -16px;
      &:hover{
        &::after{
          background-color: #079C95;
        }
      }
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
  box-shadow: 0 1px 4px 0 rgba(132, 132, 132, 0.5);
  position: absolute;
  top: 48px;
  right: 0;
  background: #fff;
  transform-origin: 98% -20px;
  z-index: 10;
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: flex-end;
  span {
    position: relative;
    height: 40px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    line-height: 14px;
    font-size: 12px;
    cursor: pointer;
    user-select: none;
    svg {
      margin-right: 9px;
      width: 16px;
      height: auto;
      path {
        fill: #666;
      }
    }
    &:hover {
      color: #06aea6;
      svg {
        path {
          fill: #06aea6;
        }
      }
    }
  }
`;
const Delta = styled.i`
  display: inline-block;
  width: 0;
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-left: 4px solid currentColor;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transform: rotate(${p => (p.isActive ? "90deg" : "0deg")});
  transition: 0.3s;
`;
const CompanyList = styled.ul`
  position: absolute;
  top: 0;
  right: 100%;
  margin-right: 2px;
  background: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(132, 132, 132, 0.5);
  width: 160px;
  li {
    color: #666;
    height: 32px;
    padding: 0 10px;
    line-height: 32px;
    font-size: 12px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: 10px;
    }
    &:hover {
      background: #fffbe0;
    }
    &.active {
      color: #06aea6;
      svg {
        path {
          fill: currentColor;
        }
      }
    }
  }
`;
class Header extends PureComponent {
  state = {
    userControlVisible: false,
    isOpen:
      this.props.defaultValue !== undefined ? this.props.defaultValue : true,
    companyListVisible: false,
    selectedCompanyId: this.props.defaultCompany
  };
  componentWillReceiveProps(nextProps) {
    const { defaultCompany } = nextProps;
    if (defaultCompany !== this.state.selectedCompanyId) {
      this.setState({
        selectedCompanyId: defaultCompany
      });
    }
  }
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
      isblur,
      companyList
    } = this.props;
    const userLastName = user ? user.name.substr(-1) : "";
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
          innerRef={el => (this.wrapNode = el)}
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
              <UserControlWrap
                visible={this.state.userControlVisible}
                className={"wj-user-control__wrap"}
              >
                <UserInfo>
                  <User>{userLastName}</User>
                  <p>
                    {user
                      ? `${user.name}${user.number ? ` (${user.number})` : ""}`
                      : ""}
                  </p>
                </UserInfo>
                <UserControl>
                  {companyList && (
                    <span
                      onClick={this.toggleCompanyList}
                      style={{ marginRight: "50%" }}
                    >
                      <Company />
                      切换公司
                      <Delta isActive={this.state.companyListVisible} />
                      {this.state.companyListVisible && (
                        <CompanyList onClick={this.changeCompany}>
                          {companyList.map((ele, index) => (
                            <li
                              key={ele.id}
                              className={
                                ele.id === this.state.selectedCompanyId
                                  ? "active"
                                  : null
                              }
                              data-id={ele.id}
                              data-content={ele.content}
                            >
                              {ele.content}
                              {ele.id === this.state.selectedCompanyId && (
                                <Selected />
                              )}
                            </li>
                          ))}
                        </CompanyList>
                      )}
                    </span>
                  )}
                  <span onClick={this.changePassword}>
                    <Password />
                    修改密码
                  </span>
                  <span onClick={this.logOut}>
                    <LogOut />
                    退出登录
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
  wrapNode;
  userControlHideTimer;
  showUserControl = e => {
    clearTimeout(this.userControlHideTimer);
    window.addEventListener("click", this.onBlur);
    this.setState({
      userControlVisible: true
    });
  };
  hideUserControl = () => {
    this.userControlHideTimer = setTimeout(
      () =>
        this.setState({
          userControlVisible: false,
          companyListVisible: false
        }),
      1000
    );
  };
  onBlur = e => {
    if (!this.wrapNode.contains(e.target)) {
      clearTimeout(this.userControlHideTimer);
      this.setState({
        userControlVisible: false,
        companyListVisible: false
      });
    }
  };
  onChange = e => {
    this.props.onChange && this.props.onChange(e, !this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logOutForm;
  logOut = () => {
    this.logOutForm.submit();
  };

  changePassword = () => {
    console.log("unset event");
  };

  toggleCompanyList = () => {
    this.setState({
      companyListVisible: !this.state.companyListVisible
    });
  };
  changeCompany = e => {
    const { onCompanyChange } = this.props;
    const { id, content } = e.target.dataset;
    onCompanyChange && onCompanyChange(id, content);
    this.setState({
      selectedCompanyId: id,
      companyListVisible: false
    });
  };
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
  defaultValue: PropTypes.bool,
  defaultCompany: PropTypes.string,
  companyList: PropTypes.array,
  onCompanyChange: PropTypes.func
};
export default Header;
