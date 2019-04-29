import React, { Component } from "react";
import { Pagination } from "@src";

class Demo2 extends Component {
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
}

export default Demo2;
