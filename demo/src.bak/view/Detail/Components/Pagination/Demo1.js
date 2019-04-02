import React, { Component } from "react";
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
}

export default Demo1;
