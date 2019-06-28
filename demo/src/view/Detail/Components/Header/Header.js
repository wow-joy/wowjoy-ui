import React, { Component } from "react";
import styled from "styled-components";
import DetailTemp from "@demoComponents/DetailTemp";
import ApiTable from "@demoComponents/ApiTable";
import CodeDemo from "@demoComponents/CodeDemo";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

const Description = styled.section``;
const Column = styled.div``;
const Apis = styled.section`
  padding-top: 20px;
  width: 100%;
  clear: both;
  table {
    width: 100%;
  }
  td {
    padding: 4px 6px;
  }
`;

class Header extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "常规使用",
        code: `import { Header } from "@es";

class Demo1 extends Component {
  changeHandle = () => {
    alert("左侧按钮被点击");
  };
  render() {
    return (
      <Header
        title={"这是标题"}
        user={{
          name: "用户名",
          number: "工号10086"
        }}
        onChange={this.changeHandle}
      >
        这是内容
      </Header>
    );
  }
}`
      },
      {
        display: <Demo2 />,
        description: "带公司切换的header",
        code: `class Demo2 extends Component {
  companyChange = (id, content) => {
    alert("切换到id为" + id + "公司");
  };
  render() {
    return (
      <Header
        user={{
          name: "用户名",
          number: "工号10086"
        }}
        companyList={[
          { content: "公司1", id: "1" },
          { content: <span>公司2</span>, id: "2" }
        ]}
        defaultCompany={'1'}
        onCompanyChange={this.companyChange}
      />
    );
  }
}`
      }
    ];

    return (
      <DetailTemp title={"Header"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 头部组件组件<br />
            2. 通常配合layout 和 nav组件共同使用
          </p>
        </Description>
        <Column className={"demo-column"}>
          {demoList
            .filter((ele, index) => index % 2 === 0)
            .map((ele, index) => (
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
        <Column className={"demo-column"}>
          {demoList
            .filter((ele, index) => index % 2 === 1)
            .map((ele, index) => (
              <CodeDemo
                display={ele.display}
                description={ele.description}
                key={index}
              >
                {ele.code}
              </CodeDemo>
            ))}
        </Column>
        <Apis>
          <h2>Api</h2>
          <ApiTable
            data={[
              {
                name: "className",
                description: "顶层样式 class",
                type: "string",
                default: ""
              },
              {
                name: "defaultStyles",
                description: "顶层默认样式",
                type: "string",
                default: ""
              },
              {
                name: "children",
                description: "内容",
                type: "node",
                default: ""
              },
              {
                name: "logo",
                description: "logo",
                type: "node",
                default: ""
              },
              {
                name: "title",
                description: "标题",
                type: "node",
                default: ""
              },
              {
                name: "newsCount",
                description: "信息数量",
                type: "number",
                default: ""
              },
              {
                name: "user",
                description: "用户信息 {name, number}",
                type: "object",
                default: ""
              },
              {
                name: "theme",
                description: "主题 {mainColor, fontColor}",
                type: "object",
                default: ""
              },
              {
                name: "isblur",
                description: "是否处于失焦状态",
                type: "bool",
                default: ""
              },
              {
                name: "onChange",
                description: "左侧图标状态改变事件",
                type: "function",
                default: ""
              },
              {
                name: "defaultValue",
                description: "左侧图标初始状态",
                type: "bool",
                default: ""
              },
              {
                name: "company",
                description: "公司选中的 id",
                type: "string",
                default: ""
              },
              {
                name: "defaultCompany",
                description: "公司初始选中的 id",
                type: "string",
                default: ""
              },
              {
                name: "companyList",
                description: "公司列表 `[{id, content}]`",
                type: "array",
                default: ""
              },
              {
                name: "onCompanyChange",
                description: "公司改变事件 params: `(id, content)`",
                type: "function",
                default: ""
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Text Api</h2>
          <ApiTable
            columns={[
              {
                title: "属性",
                render: (dataItem, index, colKey) => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: (dataItem, index, colKey) => dataItem.description,
                id: 1,
                className: "description"
              },
              {
                title: "默认值",
                render: (dataItem, index, colKey) => dataItem.default,
                id: 2
              }
            ]}
            data={[
              {
                name: "appListTEXT",
                description: "应用列表文本",
                default: `{viewMore: "查看更多系统 ",none: "暂无应用"}`
              },
              {
                name: "newsListTEXT",
                description: "新闻列表文本",
                default: `{title: "消息通知",justNow: "刚刚",minutesAgo: "分钟前",hoursAgo: "小时前",gotoMsgCenter: "进入消息中心 ",none: "暂无消息"}`
              },
              {
                name: "userInfoTEXT",
                description: "用户信息文本",
                default: `{
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
                  newPasswordLimit: "3-16个字符",
                  ok: "确定",
                  cancel: "取消",
                  unEnter: {
                    oldPassword: "您还未输入旧密码",
                    newPassword: "您还未输入新密码",
                    repeatePassword: "您还未确认新密码"
                  }
                }`
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Header;
