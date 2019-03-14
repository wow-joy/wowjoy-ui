import styled from "styled-components";
const defaultStyles = `
    .wjc-dialog-btn__close{
      color: #fff;
    }
    .wjc-dialog-header{
      background: ${p => p.theme.mainColor};
      color: #fff;
      width: 100%;
      height: 38px;
      line-height: 38px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 10px;
    }
  `;

const initSetting = {
  defaultStyles: defaultStyles
};
export default initSetting;
