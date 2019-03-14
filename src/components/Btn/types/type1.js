const initSetting = {
  defaultStyles: `background: ${ p => p.theme.mainColor|| '#06aea6'};
  color: #fff;
  &:hover{
    background: #1AC3BB;
  }
  &:active{
    background: #3E8A86;
  }`
}
export default initSetting;