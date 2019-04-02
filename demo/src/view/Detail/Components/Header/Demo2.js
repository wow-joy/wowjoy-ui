import React, { Component } from "react";
import { Header } from "@es";

class Demo2 extends Component {
  companyChange = (id, content) => {
    alert("切换到id为" + id + "公司");
  };
  render() {
    return (
      <Header
        user={{
          name: "用户名",
          number: "工号10086"
        }}
        companyList={[
          { content: "公司1", id: "1" },
          { content: <span>公司2</span>, id: "2" }
        ]}
        defaultCompany={'1'}
        onCompanyChange={this.companyChange}
      />
    );
  }
}

export default Demo2;
