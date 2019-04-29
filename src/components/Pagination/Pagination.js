import { Pagination as PainationBase } from "wowjoy-component";

import styled from "styled-components";
const Pagination = styled(PainationBase)`
  color: #999;
  font-size: 12px;
  .wjc-page-prev,
  .wjc-page-next {
    border-radius: 3px;
    &:not(.disable):hover {
      background: ${p => p.theme.lightColor_hover};
      border-color: ${p => p.theme.mainColor};
      &::before {
        border-color: ${p => p.theme.mainColor};
      }
    }
    &.disable {
      background: #f8f8f8;
      border-color: #dbdbdb;
      &::before {
        border-color: #dbdbdb;
      }
    }
    &::before {
      width: 8px;
      height: 8px;
      border: none;
      border-left: 2px solid #999;
      border-bottom: 2px solid #999;
      border-radius: 1px;
      transform: rotate(45deg) translate(10%, -20%) skew(-2deg, -2deg);
      transform-origin: 50% 50%;
    }
  }
  .wjc-page-prev {
    &::before {
      transform: rotate(45deg) translate(10%, -20%) skew(-2deg, -2deg);
    }
  }
  .wjc-page-next {
    &::before {
      transform: rotate(-135deg) translate(10%, -20%) skew(-2deg, -2deg);
    }
  }
  .wjc-page-item {
    &:hover {
      border-color: ${p => p.theme.mainColor};
      color: ${p => p.theme.mainColor};
      background: ${p => p.theme.lightColor_hover};
    }
  }
  .wjc-select-list {
    li {
      color: #666;
    }
    input {
      color: #999;
    }
  }
  .wjc-jump-to > input {
    color: #666;
    border-radius: 3px;
  }
  .wjc-jump-to__submit {
    color: #666;
    border-color: #dbdbdb;
    background: #f5f5f5;
    font-size: 12px;
    border-radius: 3px;
    &:hover {
      background: #fff;
      border-color: #ccc;
    }
  }
`;

export default Pagination;
