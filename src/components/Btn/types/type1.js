import BtnBase from "../Btn";
import styled from "styled-components";
const Btn1 = styled(BtnBase).attrs({ className: "wj-btn__1" })`
  background: ${p => {
    return p.theme.mainColor;
  }};
  color: #fff;
  &:hover {
    background: ${p => p.theme.mainColor_hover};
  }
  &:active {
    background: ${p => p.theme.mainColor_active};
  }
`;

export default Btn1;
