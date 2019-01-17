import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Company } from "../../static/medias/svg/company.svg";
import { ReactComponent as Password } from "../../static/medias/svg/password.svg";
import { ReactComponent as LogOut } from "../../static/medias/svg/log_out.svg";
import { ReactComponent as Selected } from "../../static/medias/svg/selected.svg";
import { DialogDark } from "../Dialog";
import InputBase from "../Input";
import { $fetch, getApi } from "../../config";
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

const Label = styled.label`
  display: flex;
  font-size: 14px;
  color: #666666;
  margin-top: 20px;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
  & > span {
    width: 90px;
    text-align: right;
    margin-right: 20px;
    &::before {
      content: "*";
      color: #f67676;
      font-size: 14px;
    }
  }
`;
const Input = styled(InputBase)`
  &.wrap__error {
    margin-bottom: 0;
  }
  .wj-input-msg__error {
    padding: 0;
    margin-top: 2px;
    height: 16px;
  }
`;

const TEXT = {
  from: "所属医院：",
  changeCompany: "切换公司",
  changePassword: "修改密码",
  logout: "退出登录",
  oldPassword: "旧密码",
  pleaseEnterOldPassword: "请输入旧密码",
  newPassword: "新密码",
  pleaseEnterNewPassword: "请输入新密码",
  pleaseEnterRightNewPassword: "请输入格式正确的新密码",
  repeatePassword: "确认新密码",
  pleaseEnterRepeatePassword: "请再次输入新密码",
  inconsistentWithTwoPassword: "两次密码不一致",
  ok: "确认",
  cancel: "取消",
  unEnter: {
    oldPassword: "您还未输入旧密码",
    newPassword: "您还未输入新密码",
    repeatePassword: "您还未确认新密码"
  }
};
class UserInfo extends PureComponent {
  state = {
    showChangePassword: false,
    errorMsg: {},
    oldPassword: "",
    newPassword: "",
    repeatePassword: ""
  };
  get currentCompany() {
    if (!this.props.companyList) {
      return false;
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
    if (onChangePassword && onChangePassword() === false) {
      return;
    }
    this.showChangePassword();
  };
  showChangePassword = () => {
    this.setState({
      showChangePassword: true
    });
  };
  closeChangePassword = () => {
    this.setState({
      showChangePassword: false,
      errorMsg: {},
      oldPassword: "",
      newPassword: "",
      repeatePassword: ""
    });
  };
  changeCompany = (id, content) => e => {
    const { onCompanyChange } = this.props;
    onCompanyChange && onCompanyChange(id, content);
  };
  changeHandle = name => e => {
    this.setState({
      [name]: e.target.value,
      errorMsg: {
        ...this.state.errorMsg,
        [name]: undefined,
        repeatePassword: undefined
      }
    });
  };
  blurHandle = name => e => {
    const { value } = e.target;
    const checkResult = this.check(name, value);
    if (checkResult === TEXT.inconsistentWithTwoPassword) {
      this.setState({
        errorMsg: {
          ...this.state.errorMsg,
          repeatePassword: checkResult || undefined
        }
      });
    } else {
      this.setState({
        errorMsg: {
          ...this.state.errorMsg,
          [name]: checkResult || undefined
        }
      });
    }
  };
  check = (name, value) => {
    const { newPassword, repeatePassword } = this.state;
    switch (name) {
      case "oldPassword":
        if (value === "") {
          return TEXT.pleaseEnterOldPassword;
        }
        return false;
      case "newPassword":
        if (value === "") {
          return TEXT.pleaseEnterNewPassword;
        }
        if (
          !(/[a-z]/gi.test(value) && /[0-9]/g.test(value) && value.length >= 8)
        ) {
          return TEXT.pleaseEnterRightNewPassword;
        }
      case "repeatePassword":
        if (value === "") {
          return TEXT.pleaseEnterRepeatePassword;
        }
      default:
        if (newPassword && repeatePassword && newPassword !== repeatePassword) {
          return TEXT.inconsistentWithTwoPassword;
        }
        return false;
    }
  };
  getInputProps = name => {
    return {
      value: this.state[name],
      onChange: this.changeHandle(name),
      errorMsg: this.state.errorMsg[name],
      onBlur: this.blurHandle(name)
    };
  };
  submit = (e, index) => {
    if (index === 0) {
      if (Object.values(this.state.errorMsg).some(ele => ele)) {
        return false;
      }
      if (
        ["oldPassword", "newPassword", "repeatePassword"].some(ele => {
          if (this.state[ele] === "") {
            this.setState({
              errorMsg: {
                ...this.state.errorMsg,
                [ele]: TEXT.unEnter[ele]
              }
            });
            return true;
          }
        })
      ) {
        return false;
      }
      this.put_changePassword();
      return false;
    }
  };
  put_changePassword = () => {
    const { user, changePasswordUrl, env = "dev" } = this.props;
    const { mdid, auid } = user || {};
    return $fetch
      .post(changePasswordUrl || getApi("changePassword", env), {
        body: JSON.stringify({
          mdid: mdid,
          newPassword: this.state.newPassword,
          oldPassword: this.state.oldPassword,
          auid: auid
        })
      })
      .then(res => {
        if (res.responseCode === "0") {
          alert("success");
          this.closeChangePassword();
        } else {
          alert(res.responseMessage);
        }
      });
  };
  render() {
    const {
      onUserNameClick,
      user,
      companyList,
      company,
      userLastName
    } = this.props;
    const { currentCompany, TEXT, getInputProps } = this;
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
        <DialogDark
          defaultStyles={`
          .wjc-dialog-btns{
            text-align: left;
            padding-left: 120px;
            span{
              text-align: center;
              min-width: 100px;
              margin: 0 10px;
            }
          }
          `}
          title={TEXT.changePassword}
          onClose={this.closeChangePassword}
          visible={this.state.showChangePassword}
          btnsText={[TEXT.ok, TEXT.cancel]}
          onBtnsClick={this.submit}
        >
          <form>
            <Label>
              <span>{TEXT.oldPassword}</span>
              <Input
                type={"password"}
                autoComplete="current-password"
                placeholder={TEXT.pleaseEnterOldPassword}
                {...getInputProps("oldPassword")}
              />
            </Label>
            <Label>
              <span>{TEXT.newPassword}</span>
              <Input
                type={"password"}
                autoComplete="new-password"
                placeholder={TEXT.pleaseEnterNewPassword}
                {...getInputProps("newPassword")}
              />
            </Label>
            <Label>
              <span>{TEXT.repeatePassword}</span>
              <Input
                type={"password"}
                autoComplete="new-password"
                placeholder={TEXT.pleaseEnterRepeatePassword}
                {...getInputProps("repeatePassword")}
              />
            </Label>
          </form>
        </DialogDark>
      </Wrap>
    );
  }
}

UserInfo.propTypes = {
  onUserNameClick: PropTypes.func,
  user: PropTypes.object,
  companyList: PropTypes.array,
  company: PropTypes.string,
  userLastName: PropTypes.string,
  mdid: PropTypes.string,
  auid: PropTypes.string,
  changePasswordUrl: PropTypes.string
};

export default UserInfo;
