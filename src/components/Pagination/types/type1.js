import React from "react";
import PainationBase from "../Pagination";
import styled from "styled-components";

const PaginationStyle = styled(PainationBase)`
  .wjc-page-item {
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    margin-left: 4px;
    &.active{
      border-color:${p=>p.theme.mainColor}
    }
  }
  .wjc-page-next {
    margin-left: 4px;
  }
`;
const Pagination = props => <PaginationStyle {...props} size={"24px"} />;
export default Pagination;
