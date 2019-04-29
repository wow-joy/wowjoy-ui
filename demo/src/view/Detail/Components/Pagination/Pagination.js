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

class Pagination extends Component {
  render() {
    const demoList = [
      {
        display: <Demo1 />,
        description: "常规使用",
        code: `import React, { Component } from "react";
import { Pagination, Pagination1 } from "@es";

class Demo1 extends Component {
  changeHandle = (currentPage, pageSize, total) => {
    alert(
      "当前第" + currentPage + "页\n每页" + pageSize + "条\n总共" + total + "条"
    );
  };
  render() {
    return (
      <div>
        <Pagination
          total={300}
          pageSizeList={[10, 20, 30]}
          defaultPageSize={10}
          onChange={this.changeHandle}
        />
        <br />
        <Pagination1
          total={600}
          pageSizeList={[10, 20, 30]}
          defaultPageSize={20}
          onChange={this.changeHandle}
        />
      </div>
    );
  }
}`
      },
      {
        display: <Demo2 />,
        description: "可见项， 文本配置",
        code: `class Demo2 extends Component {
  render() {
    return (
      <div>
        <Pagination
          total={300}
          pageSizeList={[10, 20, 30]}
          defaultPageSize={10}
          viewAble={["pageList", "pageSizeSelect", "jumpTo", "submit"]}
        />
        <br />
        <Pagination
          total={300}
          pageSizeList={[10, 20, 30]}
          defaultPageSize={10}
          viewAble={["prevNext", "pageSizeSelect", "jumpTo", "submit"]}
        />
        <br />
        <Pagination
          total={300}
          pageSizeList={[10, 20, 30]}
          defaultPageSize={10}
          staticStr={["一共", "项", "项/页", "前往", "页", "提交"]}
        />
      </div>
    );
  }
}`
      }
    ];

    return (
      <DetailTemp title={"Pagination"}>
        <Description>
          <h2>描述</h2>
          <p>
            1. 分页器
            <br />
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
                name: "viewAble",
                description:
                  "可见项配置; 请从默认值中删除不要字段来隐藏组件，不要修改字段",
                type: "arr",
                default:
                  "['prevNext', 'pageList', 'total', 'pageSizeSelect', 'jumpTo', 'submit']"
              },
              {
                name: "staticStr",
                description:
                  "静态文本配置; 请从默认值中修改字段，不要改变顺序或删除 ",
                type: "arr",
                default: "['共', '条', '条/页', '跳至', '页', '确定']"
              },
              {
                name: "size",
                description: "尺寸",
                type: "string",
                default: "'32px'"
              },
              {
                name: "total",
                description: (
                  <p>
                    总数，
                    <b>必填项</b>
                  </p>
                ),
                type: "number",
                default: ""
              },
              {
                name: "pageSize",
                description: (
                  <p>
                    初始每页数量，
                    <b>pageSize,defaultPageSize 必填一项</b>
                  </p>
                ),
                type: "number",
                default: ""
              },
              {
                name: "defaultPageSize",
                description: <p>初始每页数量</p>,
                type: "number",
                default: ""
              },
              {
                name: "onPageSizeChange",
                description: (
                  <p>
                    pageSize 改变事件
                    <br />
                    {"(pageSize) =>{}"}
                  </p>
                ),
                type: "function",
                default: ""
              },
              {
                name: "pageSizeList",
                description: (
                  <p>
                    每页数量可视列表，
                    <b>必填项</b>
                  </p>
                ),
                type: "arr",
                default: ""
              },
              {
                name: "siblingViewSize",
                description: "两侧可见页数量，如传入 2，则中间会显示 2+1+2 页",
                type: "number",
                default: "2"
              },
              {
                name: "currentPage",
                description: "当前所在页， 受控",
                type: "number",
                default: "1"
              },
              {
                name: "defaultCurrentPage",
                description: "初始化当前所在页， 非受控",
                type: "number",
                default: "1"
              },
              {
                name: "onChange",
                description: (
                  <p>
                    当前页改变事件，pageSize 改变事件也会触发
                    <br />
                    {"(currentPage,pageSize, total) =>{}"}
                  </p>
                ),
                type: "function",
                default: ""
              }
            ]}
          />
        </Apis>
        <Apis>
          <h2>Class Api</h2>
          <ApiTable
            columns={[
              {
                title: "className",
                render: (dataItem, index, colKey) => dataItem.name,
                id: 0
              },
              {
                title: "描述",
                render: (dataItem, index, colKey) => dataItem.description,
                id: 1
              }
            ]}
            data={[
              {
                name: "wj-page-prev",
                description: "上一页"
              },
              {
                name: "wj-page-next",
                description: "下一页"
              },
              {
                name: "wj-page-item(.active)",
                description: "页码(当前页)"
              },
              {
                name: "wj-fast-jump__prev",
                description: "左侧快速跳转"
              },
              {
                name: "wj-fast-jump__next",
                description: "右侧快速跳转"
              },
              {
                name: "wj-page-count",
                description: "总页数"
              },
              {
                name: "wj-jump-to",
                description: "快速跳转"
              },
              {
                name: "wj-jump-to__submit",
                description: "快速跳转确认按钮"
              }
            ]}
          />
        </Apis>
      </DetailTemp>
    );
  }
}

export default Pagination;
