# Toast

Toast 组件

## 使用

- 基础用法

```
import React from 'react'
import Toast from 'wowjoy-ui'

// use as function
Toast.open({
    layer: true
})

// use as component
const Foo = () => <Toast>some words</Toast>
```

## APIs

| 属性          | 描述           |  类型  | 默认值 |
| ------------- | :------------- | :----: | :----: |
| className     | 顶层样式 class | string |        |
| defaultStyles | 顶层默认样式   | string |        |

## Methods

- 使用说明

```
const option = {
    // writing options here
}

/* create */
const openToast = Toast.open(name, content,{
    ...options
})

const loadingToast = Toast.loading({
    ...options
})

/* hide */
openToast.hide()
loadingToast.hide()

/* show */
openToast.show()
loadingToast.show()

/* destroy */
openToast.destroy()
loadingToast.destroy()
```

- method

  | 方法    | 描述             | arguments                                                                                         | 默认 options                   |
  | ------- | :--------------- | :------------------------------------------------------------------------------------------------ | :----------------------------- |
  | open    | 弹出一个 toast   | `name` : 弹框名（区分多个弹框的自动关闭事件用）,<br/>`content` : 弹出的内容,<br/>`options` : 配置 | `layer: false, autoClose: 500` |
  | loading | 弹出一个 loading | `options` : 配置                                                                                  | `layer: true`                  |

- options
  | 参数 | 描述 | 类型 | 默认值 |
  | --------- | :---------------------------------------------------------------------------------------- | :------------: | :----: |
  | className | 蒙层的样式 | ReactComponent | |
  | container | 指定输出容器， 默认为 body | DOM node | |
  | layer | 有无蒙层 | boolean | |
  | autoClose | 自动关闭的等候时间 | number | |
  | onClose | 关闭事件句柄，`return false` 可以阻止关闭事件。若要实现 `onblur` 效果，请自行判断 `event` | function | |