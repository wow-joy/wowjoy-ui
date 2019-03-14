const initSetting = {
  defaultStyles: `background: #fff;
  border-color: ${ p => p.theme.mainColor|| '#06aea6'};
  color: ${ p => p.theme.mainColor|| '#06aea6'};
  &:hover{
    background: #F0FFFD;
  }
  &:active{
    background: #D8F6F5;
  }`
};
export default initSetting;
