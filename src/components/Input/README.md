# Input

Input 组件

## 使用

- 基础用法

```
import React from 'react'
import Input from 'wowjoy-ui'

const Foo = () => <Input></Input>
```

## APIs

| 属性          | 描述           |              类型               | 默认值 |
| ------------- | :------------- | :-----------------------------: | :----: |
| className     | 顶层样式 class |             string              |        |
| defaultStyles | 顶层默认样式   |             string              |        |
| children      | 内容           |              node               |        |
| errorMsg      | 错误信息       |             string              |        |
| viewType      | 显示类型       | "captcha", "password", "search" |        |
| TEXT          | 文本           |             object              |        |

## CLASS APIS

| className                     | 描述                 |
| ----------------------------- | :------------------- |
| wj-input-wrap(.wrap\_\_error) | 外层(错误状态)       |
| wj-input-base(.base\_\_error) | 真实 input(错误状态) |
| wj-input-msg\_\_error         | 错误提示             |

## Captcha 验证码

| 属性        | 描述         |  类型  | 默认值 |          返回值          |
| ----------- | :----------- | :----: | :----: | :----------------------: |
| maxCount    | 最大计时     | number |        |                          |
| sendCaptcha | 点击发送事件 |  func  |        | Promise 详见下方 example |

## Captcha Class

| className                | 描述     |
| ------------------------ | :------- |
| wj-input-captcha\_\_send | 发送按钮 |

- Captcha Example

```
    class Foo extends React.PureComponent(){
        sendCaptcha = () =>{
            return new Promise((res,rej)=>{
                fetch('someUrl' , {
                    data
                }).then(response=>{
                    if(response.code=== '0'){
                        // success
                        res()
                    }else{
                        rej()
                    }
                })
            })
        }
        render(){
            return <Input viewType="captcha"  sendCaptcha = {this.sendCaptcha}/>
        }

    }

```

## Password 验证码

| 属性           | 描述             |  类型   | 默认值 |
| -------------- | :--------------- | :-----: | :----: |
| visibleControl | 是否显示显隐按钮 | boolean |        |

## Password Class

| className                              | 描述               |
| -------------------------------------- | :----------------- |
| wj-input-password\_\_control(.visible) | 密码显隐按钮(显示) |

## Search 搜索

_TODO_
