import { Table } from "wowjoy-component";
import React, { Component } from "react";

class ApiTable extends Component {
  render() {
    return (
      <Table
        defaultStyles={`
          tr>td{border: 1px solid #aaa;}
          color: #666
        `}
        columns={[
          {
            render: (dataItem, index, colKey) => dataItem.name,
            id: 0
          },
          {
            render: (dataItem, index, colKey) => dataItem.description,
            id: 1
          },
          {
            render: (dataItem, index, colKey) => dataItem.type,
            id: 2
          },
          {
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
