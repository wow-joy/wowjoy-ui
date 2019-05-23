import React, { Component } from "react";
import { FormLayout } from "@src";
import { ReactComponent as Home } from "@es/static/medias/svg/home.svg";

class Demo1 extends Component {
  render() {
    return (
      <FormLayout labelClassName={"label"}>
        {[
          "姓名",
          "班级",
          "学号",
          "姓名姓名姓名姓名",
          "班级班级班级",
          "学号学号"
        ].map((ele, index) => (
          <label style={{ display: "flex", margin: "10px 0" }}>
            <span className={"label"} style={{ flexShrink: "0" }}>
              {ele}
            </span>
            <input
              style={{
                border: "1px solid #ccc",
                width: "250px",
                height: "32px",
                marginLeft: "20px"
              }}
            />
          </label>
        ))}
      </FormLayout>
    );
  }
}

export default Demo1;

export const code = `<FormLayout labelClassName={"label"}>
{[
  "姓名",
  "班级",
  "学号",
  "姓名姓名姓名姓名",
  "班级班级班级",
  "学号"
].map((ele, index) => (
  <label style={{ display: "flex", margin: "20px 0" }}>
    <span className={"label"} style={{ flexShrink: "0" }}>
      {ele}
    </span>
    <input
      style={{
        border: "1px solid #ccc",
        width: "250px",
        height: "32px",
        marginLeft: "20px"
      }}
    />
  </label>
))}
</FormLayout>`;
