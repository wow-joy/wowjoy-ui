import React, { PureComponent } from "react";
import { Pagination as PainationBase } from "wowjoy-component";
import { Hoc } from "wowjoy-component/es/tools";

const Pagination = Hoc({
  defaultStyles: `
    color:#999;
    font-size: 12px;
    .wj-page-prev, .wj-page-next{
      background: #f5f5f5;
      &:not(.disable):hover{
        background: #fff;
        border-color: #ccc;
      }
      &.disable{
        background: #e8e8e8;
        boder-color:#dbdbdb;
      }
    }
    .wj-page-prev{
      &::before{border-right: 4px solid #ccc;}
    }
    .wj-page-next{
      &::before{border-left: 4px solid #ccc;}
    }
    .wj-page-item{
      color: #999;
      &:hover{
        background: #def7f4
      }
    }
    .wj-jump-to>input{
      color: #999
    }
    .wj-jump-to__submit{
      color: #666;
      border-color: #dbdbdb;
      background: #f5f5f5;
      font-size:12px;
      &:hover{
        background: #fff;
        border-color: #ccc;
      }
    }
  `
})(PainationBase);
export default Pagination;
