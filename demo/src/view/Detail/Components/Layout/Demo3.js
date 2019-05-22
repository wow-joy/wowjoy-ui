import React, { Component } from "react";
import styled from "styled-components";
import { Layout as LayoutBase } from "@es";
class Demo extends Component {
  render() {
    return (
      <LayoutBase
        defaultStyles={`
          min-height: 0;
          &&>header{position: absolute; background: rgba(186,241,230,0.3)};
          && .wjc-layout-aside__left{
            height: 100px;
            background: rgba(155,243,225,0.6);
          }
          && .wjc-layout-center{
            height: 100px;
            background: rgba(155,243,122,0.6)
          }
        `}
        header={"header -- height: 64px"}
        asideLeft={"left -- width: 180px"}
        showLeft={true}
        leftSize="small"
      >
        children
      </LayoutBase>
    );
  }
}
export default Demo;

export const code = `
<LayoutBase
  defaultStyles={\`
    min-height: 0;
    &&>header{position: absolute; background: rgba(186,241,230,0.3)};
    && .wjc-layout-aside__left{
      height: 100px;
      background: rgba(155,243,225,0.6);
    }
    && .wjc-layout-center{
      height: 100px;
      background: rgba(155,243,122,0.6)
    }
\`}
  header={"header -- height: 64px"}
  asideLeft={"left -- width: 180px"}
  showLeft={true}
  leftSize="small"
>
  children
</LayoutBase>

`;
