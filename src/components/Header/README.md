# Header

Header 组件

## 使用

- 基础用法

```
import React from 'react'
import {Header} from 'wowjoy-ui'

const Foo = () => <Header></Header>

// with appList newsList
import APIStore from "wowjoy-ui/es/header";

const Foo = () => <Header
 appList: [
    {
      icon: <img src = {APIStore} />,
      id: 1,
      content: "x"
    }
  ],
  newsList: [
    {
      id: 1,
      content: "x",
      time: new Date("2019-1-2")
    }
  ]
></Header>
```

## APIs

| 属性             | 描述                                                                      |  类型  | 默认值 |
| ---------------- | :------------------------------------------------------------------------ | :----: | :----: |
| className        | 顶层样式 class                                                            | string |        |
| defaultStyles    | 顶层默认样式                                                              | string |        |
| children         | 内容                                                                      |  node  |        |
| logo             | logo                                                                      |  node  |        |
| title            | 标题                                                                      |  node  |        |
| appList          | 应用列表 `[{id: string,onClick: function, content: node, icon: node}]`    | array  |        |
| newsList         | 消息列表 `[{id: string,onClick: function, content: node, time: dateObj}]` | array  |        |
| newsCount        | 信息数量                                                                  | number |        |
| user             | 用户信息                                                                  | object |        |
| theme            | 主题                                                                      | object |        |
| isblur           | 是否处于失焦状态                                                          |  bool  |        |
| onChange         | 左侧图标状态改变事件                                                      |  func  |        |
| defaultValue     | 左侧图标初始状态                                                          |  bool  |        |
| company          | 公司始选中的 id (受控)                                                    | string |        |
| defaultCompany   | 公司初始选中的 id (非受控)                                                | string |        |
| companyList      | 公司列表 `[{id, content}]`                                                | array  |        |
| onCompanyChange  | 公司改变事件 params: `(id, content)`                                      |  func  |        |
| onUserNameClick  | 弹出框的用户名点击事件                                                    |  func  |        |
| onChangePassword | 修改密码点击事件                                                          |  func  |        |

## classApi

| 属性                       | 描述                       |
| -------------------------- | :------------------------- |
| wj-header-wrap             | 顶层                       |
| wj-header-dropdown         | 下拉菜单                   |
| wj-user-control\_\_wrap    | 下拉菜单-用户信息          |
| wj-header-dropdown\_\_user | 下拉菜单内容-用户信息      |
| wj-header-dropdown\_\app   | 下拉菜单内容-应用系统      |
| wj-header-dropdown\_\_news | 下拉菜单内容-消息通知      |
| wj-header-dropdown\_\_none | 下拉菜单内容-空            |
| wj-header-company-list     | 下拉菜单-用户信息-公司列表 |

## icon export

图片具体样式请查看 io 页

```
import {
  APIStore,
  Authority,
  Cockpit,
  Developer,
  Device,
  Doctor,
  HR,
  Mail,
  Material,
  Nursing,
  Outpatient,
  PACS,
  Process,
  Quality,
  SMS
} from 'wowjoy-ui/es/header';

```
