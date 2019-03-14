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
import { $fetch, apis } from "../../config";

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
const Frame = styled.iframe`
  position: absolute;
  z-index: -2;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
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
  width: auto;
  height: 50px;
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
    background-color: ${p => (!p.deep || p.isblur ? (p.theme.mainColor|| '#06aea6') : "#007872")};
    z-index: -1;
  }
`;

class Header extends PureComponent {
  constructor(props) {
    super(props);

  }

  state = {
    isOpen:
      this.props.defaultValue !== undefined ? this.props.defaultValue : true,
    newsList: [],
    appList: [],
    logo: "",
    moreSystem: ""
  };

  componentDidMount() {
    const { mdid, userId, iaid } = this.props.user || {};

    mdid &&
      this.get_hospitalInfo({ mdid })
        .then(logo => {
          this.setState({
            logo
          });
        })
        .catch(err => console.error(err));

    userId &&
      iaid &&
      this.get_newsList({ userId, iaid })
        .then(newsList =>
          this.setState({
            newsList
          })
        )
        .catch(err => console.error(err));

    userId &&
      mdid &&
      this.get_appList({
        userId,
        mdid
      })
        .then(({appList, moreSystem}) =>
          this.setState({
            appList,
            moreSystem
          })
        )
        .catch(err => console.error(err));
  }

  componentWillReceiveProps(nextProps) {
    const { mdid, userId, iaid } = this.props.user || {};
    const { mdid: nextMdid, userId: nextUserId, iaid: nextIaid } =
      nextProps.user || {};

    nextMdid &&
      nextMdid !== mdid &&
      this.get_hospitalInfo({ mdid })
        .then(logo => {
          this.setState({
            logo
          });
        })
        .catch(err => console.error(err));

    userId &&
      nextUserId !== userId &&
      iaid &&
      nextIaid !== iaid &&
      this.get_newsList({ userId, iaid })
        .then(newsList =>
          this.setState({
            newsList
          })
        )
        .catch(err => console.error(err));

    userId &&
      nextUserId !== userId &&
      mdid &&
      nextMdid !== mdid &&
      this.get_appList({
        userId,
        mdid
      })
        .then(({appList, moreSystem}) =>
          this.setState({
            appList,
            moreSystem
          })
        )
        .catch(err => console.error(err));
  }

  get_newsList = ({ userId, iaid }) => {
    return $fetch
      .get(apis.newsList, {
        params: {
          userId,
          iaid,
          status: "1101-01"
        }
      })
      .then(res => {
        if (res.responseCode === "0") {
          const { messageList } = res.responseData;
          const { env = "dev" } = this.props;
          return messageList.map(ele => ({
            id: ele.messageId,
            to: this.state.moreSystem + `/page/messageDetail?messageId=${ele.messageId}`,
            content: ele.messageSubject,
            time: new Date(ele.updateTime)
          }));
        }
      })
      .catch(err => console.error(err));
  };
  get_appList = ({ userId, mdid }) => {
    return $fetch
      .get(apis.appList, {
        params: {
          userId,
          mdid
        }
      })
      .then(res => {
        if (res.responseCode === "0") {
          const { applicationList: appList, moreSystem } = res.responseData;
          return {
            appList: appList.filter(ele => ele.isAuth === "1").map(ele => ({
              title: ele.name,
              icon: ele.logo,
              content: ele.descLong,
              id: ele.id,
              to: ele.address
            })),
            moreSystem: moreSystem
          };
        }
      })
      .catch(err => console.error(err));
  };
  get_hospitalInfo = ({ mdid }) => {
    return $fetch
      .get(apis.hospitalInfo, {
        params: { mdid }
      })
      .then(res => {
        if (res.responseCode === "0") {
          const { hospital } = res.responseData;
          return hospital.logoImage;
        }
      })
      .catch(err => console.error(err));
  };
  get newsCount() {
    return (this.props.newsList || []).length;
  }
  render() {
    const {
      className,
      defaultStyles,
      children,
      title,
      user,
      theme,
      isblur,
      logo: propsLogo,
      companyList,
      company,
      onCompanyChange,
      onChangePassword,
      onUserNameClick,
      changePasswordUrl,
    } = this.props;
    const { appList, moreSystem, newsList, logo } = this.state;
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
      userLastName,
      changePasswordUrl
    };
    const { newsCount } = this;

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Wrap
          defaultStyles={defaultStyles}
          className={"wj-header-wrap " + className}
          isblur={isblur}
        >
          {/* <Frame src={this.baseUrls[env]} /> */}

          <Left>
            <span onClick={this.onChange}>
              {this.state.isOpen ? <CloseIcon /> : <OpenIcon />}
            </span>
            <Logo src={propsLogo || logo} />
            <Title>{title}</Title>
          </Left>
          <Center>{children}</Center>
          <Right>
            <li>
              <WowjoyIcon />
              {
                <ControlWrap>
                  <AppList
                    list={appList}
                    moreLink={moreSystem + "/page/MyApps"}
                  />
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
                  <NewsList
                    list={newsList}
                    currentDate={new Date()}
                    moreLink={moreSystem + "/page/messageCenter"}
                  />
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
  onChangePassword: PropTypes.func,
  changePasswordUrl: PropTypes.string
};
export default ControllSwitchHoc({
  onChange: "onCompanyChange",
  value: "company",
  defaultValue: "defaultCompany"
})(Header);
