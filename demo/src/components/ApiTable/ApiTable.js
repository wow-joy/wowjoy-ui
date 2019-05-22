import { Table as TableBase } from "@es";
import React, { Component } from "react";
import styled from "styled-components";
const Table = styled(TableBase)`
  margin: 20px auto;
  width: 90%;
  tr > th {
    border: 1px solid #aaa;
  }
  tr > td {
    border: 1px solid #aaa;
  }
  & > thead {
    font-size: 16px;
  }
  & > tbody {
    font-size: 14px;
  }
  color: #666;
  .description {
    white-space: nowrap;
  }
`;
class ApiTable extends Component {
  render() {
    return (
      <Table
        selection={false}
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
