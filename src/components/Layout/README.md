# Layout

Layout 组件

## 使用

- 基础用法

```
import React from 'react'
import {Layout, Header, Nav} from 'wowjoy-ui'

class Foo extends React.Component{
    state = { showLeft: true };
    toggleLeft = () => {
        this.setState({
        showLeft: !this.state.showLeft
        });
    };
    render(){
        return (
            <Layout
                header={<Header onChange={this.toggleLeft}/>}
                asideLeft={<Nav size={"small"} />}
                leftSize={"small"}
                showLeft={this.state.showLeft}
            >
            </Layout>
        )
    }
}
```

## APIs

| 属性          | 描述                                                 |  类型  | 默认值 |
| ------------- | :--------------------------------------------------- | :----: | :----: |
| className     | 顶层样式 class                                       | string |        |
| defaultStyles | 顶层默认样式                                         | string |        |
| children      | 内容                                                 |  node  |        |
| showLeft      | 是否显示左侧                                         |  bool  |        |
| leftSize      | 左侧大小, 若使用 Nav 组件, 请和 nav 的 size 保持一致 | string |        |
