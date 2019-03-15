import { Pagination as PainationBase } from "wowjoy-component";

import styled from "styled-components";
const Pagination = styled(PainationBase)`
  color: #999;
  font-size: 12px;
  .wjc-page-prev,
  .wjc-page-next {
    background: #f5f5f5;
    &:not(.disable):hover {
      background: #fff;
      border-color: #ccc;
    }
    &.disable {
      background: #e8e8e8;
      border-color: #dbdbdb;
    }
  }
  .wjc-page-prev {
    &::before {
      border-right: 4px solid #ccc;
    }
  }
  .wjc-page-next {
    &::before {
      border-left: 4px solid #ccc;
    }
  }
  .wjc-page-item {
    &:hover {
      background: ${p=>p.theme.lightColor_hover};
    }
  }
  .wjc-jump-to > input {
    color: #999;
  }
  .wjc-jump-to__submit {
    color: #666;
    border-color: #dbdbdb;
    background: #f5f5f5;
    font-size: 12px;
    &:hover {
      background: #fff;
      border-color: #ccc;
    }
  }
`;

export default Pagination;
