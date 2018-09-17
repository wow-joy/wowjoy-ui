# Dialog

Dialog 组件

## 使用

- 基础用法

```
import React from 'react'
import Dialog from 'wowjoy-ui'

class Foo extends React.Component {
    state={dialogVisible: false}
    render(){
        return (
            <div>
                <span onClick = {()=>this.setState({dialogVisible: true})}>
                    open dialog
                </span>
                <Dialog visible = {this.state.dialogVisible} onClose={()=>this.setState({dialogVisible: false})}>
                    this is content
                </Dialog>
            </div>
        )
    }
}
const Foo = () =>
```

## APIs

| 属性          | 描述                                                                                                                                                                                                                         |      类型      |      默认值       |
| ------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------: | :---------------: |
| className     | 顶层样式 class                                                                                                                                                                                                               |     string     |                   |
| defaultStyles | 顶层默认样式                                                                                                                                                                                                                 |     string     |                   |
| children      | 被弹出内容                                                                                                                                                                                                                   |      node      |                   |
| visible       | 是否可见                                                                                                                                                                                                                     |      bool      |                   |
| getContainer  | 返回弹出到的目标 Dom 的函数, 若为`false`的话会按常规组件渲染<br>                                                                                                                                                             | func \| false  | ()=>document.body |
| layer         | 是否显示覆盖灰层                                                                                                                                                                                                             |      bool      |       true        |
| onClose       | 灰层点击回调， return false 会阻止关闭。                                                                                                                                                                                     |      func      |                   |
| autoClose     | 自动关闭时间                                                                                                                                                                                                                 |  number, bool  |       false       |
| translate     | 内容弹出定位;其余样式请使用 css 选择器修改; example: `translate(0,0)`                                                                                                                                                        |     string     |                   |
| header        | 标题组件渲染函数: 例如 ()=><Foo\><\/Foo> ;<br/> 当值为`false`时不显示标题;为空时显示默认标题                                                                                                                                 | func \|\| bool |                   |
| title         | 标题文本                                                                                                                                                                                                                     |     string     |                   |
| btns          | 按钮节点数组, 请在数组中传递 function 而不是已经实例化的组件:<br/> 例如 [ props =><Foo {...props}>{props.children}<\/Foo>] props 可以拿到默认设定的`onClick`, `className`<br/>与`Btn`组件结合使用，可以直接传入[Btn_1,Btn_2] |     array      |                   |
| btnsText      | 按钮文案数组: 数组个数控制按钮数量                                                                                                                                                                                           |     array      | ["提交", "取消"]  |
| onClose       | 关闭事件，点击`x`按钮触发，`onClick`没有`return false` 也会触发                                                                                                                                                              |      func      |                   |
| onBtnsClick   | 按钮点击事件。包含组件内除关闭按钮外的所有按钮。 接受两个参数`(event,index)`<br/> `event`: 点击事件<br/>`index`: 被点击按钮的下标<br/> `return false`可以阻止组件被关闭                                                      |      bool      |       true        |
| showCloseBtn  | 是否显示关闭按钮                                                                                                                                                                                                             |      bool      |       true        |
