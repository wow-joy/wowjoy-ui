## 0.13.5 (2019/7/16)

### bugfix
- 升级 component 组件库, 修复es2015不兼容

## 0.13.4 (2019/7/2)

### feature

- 增加 Toast 组件 demo
- 修改 Header 组件忘记密码的长度限制

### bugfix

- 修复 Toast 组件 className

## 0.13.3 (2019/6/25)

### feature

- 升级 wowjoy-component (view CHANGELOG there)

## 0.13.2 (2019/6/5)

### bugfix

- 修复 FormLayout 重复渲染 bug

## 0.13.1 (2019/5/29)

### bugfix

- 修复 Pagination 行高
- 修复 FormLayout resize 事件未注销

## 0.13.0 (2019/5/28)

### feature

- 新增 ScrollBox 组件
- 增加 ScrollBox demo
- 升级 component 组件库

## 0.12.2 (2019/5/24)

### feature

- 增加 FormLayout demo
- 更换 Svg
- 升级 component 组件库

## 0.12.1 (2019/5/17)

### feature

- 新增 no_picture svg
- 优化 nav 组件动画和样式

## 0.12.0 (2019/5/16)

### feature

- 新增 FormLayout 组件

## 0.11.42 (2019/5/6)

### bugfix

- 修复 svg 依赖引入 bug
- 修改样式
- 升级 wowjoy-component

## 0.11.41 (2019/4/29)

### feature

- Header 组件增加 TEXT api
- Pagination 组件样式修改

## 0.11.40 (2019/4/15)

### bugfix

- Nav 组件`hover`状态颜色错误
- Nav 组件的点击事件无法被`return false`禁止

## 0.11.39 (2019/4/2)

### bugfix

- 导航无法收起 bug

## 0.11.29 (2019/3/13)

### bugfix

- 增加主题色配置

## 0.11.25 (2019/3/13)

### bugfix

- Header 修改更多链接的获取方式

## 0.11.20 (2019/3/01)

### bugfix

- Header 移除了 iframe

## 0.11.6 (2019/2/19)

### bugfix

- Header app 标题文本错误

## 0.11.4 (2019/2/13)

### feature

- Header 组件内置了业务逻辑，消息中心，应用市场等

## 0.10.4 (2019/1/29)

### feature

- input error 文本样式颜色修改

## 0.10.3 (2019/1/21)

### bugfix

- styled-components@4.x pr 尚未合并, nav 组件继续使用兼容写法

## 0.10.2 (2019/1/21)

### bugfix

- styled-components@4.x 引发的 animation bug。

## 0.10.1 (2019/1/17)

### bugfix

- styled-components@4.x 引发的 nav 组件 bug。 替换成兼容写法后续提交 issue

## 0.10.0 (2019/1/17)

### feature

- styled-components 迁移到 4.x
- Header 新增修改密码弹框功能

## 0.9.4 (2019/1/10)

### bugfix

- Header apilist 图标样式错误

## 0.9.3 (2019/1/10)

### feature

- Header 代码优化
- svg 新增 10 个

### doc

- 更新 Header 组件文档

## 0.9.2 (2019/1/9)

### bugfix

- Header 高度 bug 修复

## 0.9.1 (2019/1/8)

### feature

- Header 组件大更新
  - 新增两个下拉菜单
  - 修改人员信息下拉菜单交互
  - 增加应用图标导出

### doc

- 更新 Header 组件文档

## 0.9.0 (2019/1/7)

### feature

- Header 组件增加了名字点击事件
- 新增 Input 组件, 新增 captcha, password Type

### doc

- 更新 Header 组件文档
- 新增 Input 组件文档

## 0.8.2 (2019/1/3)

### bugfix

- Header 组件 onblur 增加了前置判断和事件移除

## 0.8.1 (2019/1/2)

### bugfix

- Header 组件 公司切换 bug 修复

### feature

- Header 组件 新增 api company, 并增加受控模式

### doc

- 更新 Header 组件文档

## 0.8.0 (2019/1/2)

### feature

- 新增 Toast 组件

## 0.7.4 (2018/11/7)

### bugfix

- table fix data error

## 0.7.3 (2018/11/6)

### feature

- table 新增 onRowClick 事件
- select 增加 class api

### bugfix

- 修复 文本错误: 退出登陆 => 退出登录

## 0.7.2 (2018/10/26)

### bugfix

- 修复 ControllSwitchHoc 变更引发的异常

## 0.7.1 (2018/10/19)

### bugfix

- 修复 pagination onChange, pageSize 丢失

## 0.7.0 (2018/10/17)

### feature

- rewrite ControllSwitchHoc ,优化命名传递
- 优化 ControllSwitchHoc 改变而引发的命名替换
- pagination 组件增加每页数量改变事件 并允许外设每页数量

### bugfix

- 修复 pagination onChange,onPageSizeChange 的空判断

## 0.6.4 (2018/10/9)

### bugfix

- 修复 nav 异常跳转

## 0.6.2 (2018/10/9)

### bugfix

- 修复 路径异常

## 0.6.1 (2018/10/9)

### bugfix

- 修复 ScrollBox 样式丢失

## 0.6.0 (2018/10/08)

### feature

- upgrade wowjoy-component@v2.5.0
- 增加 ScrollBox 对 webkit 的优化

## 0.5.6 (2018/9/21)

### bugfix

- 修复 Header 组件 '))' bug

## 0.5.4 (2018/9/20)

### feature

- pagination 组件新样式 1 发布

## 0.5.1 (2018/9/20)

### doc

- 修复了 Header Nav 组件的文档错误

### bugfix

- 修复 nav 组件 pop 弹出的问题

## 0.5.0 (2018/9/20)

### feature

- 新增 Btn 组件

### bugfix

- 增加 nav 组件 navList 的默认值

## 0.4.7 (2018/9/19)

### bugfix

- 修复 Header 的 id 赋值错误

## 0.4.6 (2018/9/19)

### bugfix

- 修复 Header 的 id 判断错误

## 0.4.5 (2018/9/19)

### bugfix

- 修复 Header 的类型错误

## 0.4.4 (2018/9/19)

### bugfix

- 优化 Header 的公司默认选中

## 0.4.3 (2018/9/19)

### bugfix

- 修复下划线命名的组件为大驼峰

## 0.4.2 (2018/9/19)

### bugfix

- 修复多个 Dialog 的动画异常

### doc

- 新增 Dialog 组件的文档

## 0.4.1 (2018/9/14)

### bugfix

- 修复 Dialog 弹出动画

## 0.4.0 (2018/9/13)

### feature

- 新增 Dialog 组件

## 0.3.7 (2018/9/12)

### bugfix

- Layout api 修复

## 0.3.6 (2018/9/12)

### bugfix

- Layout 结构修改

## 0.3.5 (2018/9/11)

### bugfix

- Layout footer 样式修复

## 0.3.4 (2018/9/10)

### feature

- Rename svg

## 0.3.3 (2018/9/10)

### bugfix

- Layout 组件 api 修改

## 0.3.2 (2018/9/3)

### bugfix

- Header 组件用户信息显示 null 修复

## 0.3.1 (2018/8/31)

### feature

- Header 组件新增 defaultCompany api,wj-user-control\_\_wra classApi
- Nav 组件样式优化
- 新增 1 个 svg 图标

### docs

- Header 组件文档更新

## 0.3.0 (2018/8/30)

### feature

- Nav 组件正式完成
- Layout 组件正式完成

### docs

- Nav 组件文档完成
- Layout 组件文档完成

## 0.2.0 (2018/8/21)

### feature

- Nav 组件初版完成

## 0.1.4 (2018/8/17)

### bug fix

- 修复路由跳转的 blur 事件

## 0.1.1 (2018/8/17)

### bug fix

- 修复 svg 未发布 bug

## 0.1.0 (2018/8/17)

### feature

- Header 组件
- Nav 组件

### docs

- 更新 Pop 组件的文档
