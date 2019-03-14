const initSetting = {
  defaultStyles: `background: #fff;
  border-color: ${p => p.theme.mainColor};
  color: ${p => p.theme.mainColor};
  &:hover{
    background: #F0FFFD;
  }
  &:active{
    background: #D8F6F5;
  }`
};
export default initSetting;
