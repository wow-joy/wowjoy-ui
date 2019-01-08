import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Company } from "../../static/medias/svg/company.svg";
import { ReactComponent as Password } from "../../static/medias/svg/password.svg";
import { ReactComponent as LogOut } from "../../static/medias/svg/log_out.svg";
import { ReactComponent as Selected } from "../../static/medias/svg/selected.svg";
const Wrap = styled.div`
  width: 200px;
`;
const User = styled.span`
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
const Main = styled.div`
  width: 100%;
  background: #f5f7f8;
  padding: 9px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: #666;
    font-size: 12px;
    line-height: 14px;
    margin-top: 9px;
  }
  p {
    color: #666;
    font-size: 12px;
    line-height: 14px;
    margin-top: 12px;
    display: -webkit-box;
    overflow: hidden;
    width: 160px;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
`;

const UserControl = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: flex-end;
  & > span {
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
      margin: 0 8px;
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
const CompanyControl = styled.span`
  &:hover {
    .wj-header-company-list {
      opacity: 1;
      transform: scale(1);
    }
    & > i {
      transform: rotate(90deg);
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
  transform: rotate(0);
  transition: 0.3s;
`;
const CompanyList = styled.ul`
  position: absolute;
  top: 0;
  right: 100%;
  margin-right: 1px;
  background: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(132, 132, 132, 0.5);
  width: 160px;
  opacity: 0;
  transform: scale(0);
  transform-origin: 100% 0;
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
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
    }
    svg {
      width: 10px;
      flex-shrink: 0;
      flex-grow: 0;
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

const TEXT = {
  from: "所属医院：",
  changeCompany: "切换公司",
  changePassword: "修改密码",
  logout: "退出登录"
};
class UserInfo extends PureComponent {
  get currentCompany() {
    if(!this.props.companyList){
      return false
    }
    return this.props.companyList.find(ele => ele.id === this.props.company);
  }
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
  logOutForm;
  logOut = () => {
    this.logOutForm.submit();
  };

  changePassword = () => {
    const { onChangePassword } = this.props;
    onChangePassword && onChangePassword();
  };
  changeCompany = (id, content) => e => {
    const { onCompanyChange } = this.props;
    onCompanyChange && onCompanyChange(id, content);
  };
  render() {
    const {
      onUserNameClick,
      user,
      companyList,
      company,
      userLastName
    } = this.props;
    const { currentCompany, TEXT } = this;
    return (
      <Wrap className={"wj-header-dropdown__user"}>
        <Main>
          <User onClick={onUserNameClick}>{userLastName}</User>
          <div>
            {user
              ? `${user.name}${user.number ? ` (${user.number})` : ""}`
              : ""}
          </div>
          {currentCompany && (
            <p title={currentCompany.content}>
              {TEXT.from}
              {currentCompany.content}
            </p>
          )}
        </Main>
        <UserControl>
          {companyList && (
            <CompanyControl style={{ marginRight: "50%" }}>
              <Company />
              {TEXT.changeCompany}
              <Delta />
              {
                <CompanyList className={"wj-header-company-list"}>
                  {companyList.map((ele, index) => (
                    <li
                      key={ele.id}
                      className={ele.id === company ? "active" : null}
                      onClick={this.changeCompany(ele.id, ele.content)}
                    >
                      <span>{ele.content}</span>
                      {ele.id === company && <Selected />}
                    </li>
                  ))}
                </CompanyList>
              }
            </CompanyControl>
          )}
          <span onClick={this.changePassword}>
            <Password />
            {TEXT.changePassword}
          </span>
          <span onClick={this.logOut}>
            <LogOut />
            {TEXT.logout}
          </span>
          <form
            action="/logout"
            method="post"
            ref={el => {
              this.logOutForm = el;
            }}
            style={{ display: "none" }}
          >
            <input name="_csrf" value={window._csrf && window._csrf.token} />
            <input
              name="_csrf_header"
              value={window._csrf && window._csrf.name}
            />
          </form>
        </UserControl>
      </Wrap>
    );
  }
}

UserInfo.propTypes = {};

export default UserInfo;
