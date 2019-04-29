import { Table } from "wowjoy-component";
import React, { Component } from "react";

class ApiTable extends Component {
  render() {
    return (
      <Table
        defaultStyles={`
          tr>th{border: 1px solid #aaa;};
          tr>td{border: 1px solid #aaa;}
          color: #666;
          .description{
            white-space: nowrap
          }
        `}
        columns={[
          {
            title: "属性",
            render: (dataItem, index, colKey) => dataItem.name,
            id: 0
          },
          {
            title: "描述",
            render: (dataItem, index, colKey) => dataItem.description,
            id: 1,
            className: "description"
          },
          {
            title: "类型",
            render: (dataItem, index, colKey) => dataItem.type,
            id: 2
          },
          {
            title: "默认值",
            render: (dataItem, index, colKey) => dataItem.default,
            id: 3
          }
        ]}
        {...this.props}
        data={this.props.data.map((ele, index) => ({ ...ele, id: index }))}
      />
    );
  }
}

export default ApiTable;
