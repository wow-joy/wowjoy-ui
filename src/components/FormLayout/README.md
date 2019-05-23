# FormLayout

FormLayout 组件

## 使用

- 基础用法

```
import React from 'react'
import FormLayout from 'wowjoy-ui'

const Foo = () => <FormLayout labelClassName = {'x'}>
    <label className={'x'}>label</label>
    <input />
</FormLayout>
```

## APIs

| 属性            | 描述                                         |  类型  |       默认值        |
| --------------- | :------------------------------------------- | :----: | :-----------------: |
| className       | 顶层样式 class                               | string |                     |
| defaultStyles   | 顶层默认样式                                 | string |                     |
| children        | 内容                                         |  node  |                     |
| fontSize        | 字体大小                                     | number |         14          |
| maxItemWidth    | 每项最大宽度                                 | number | fontSize \* 6 + 310 |
| labelClassName  | `label` class                                | string |                     |
| getColumnsCount | 列数计算函数 (width, maxItemWidth) => number |  func  |                     |
