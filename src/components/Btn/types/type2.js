import BtnBase from "../Btn";
import styled from "styled-components";
const Btn2 = styled(BtnBase).attrs({ className: "wj-btn__2" })`
  background: #fff;
  border-color: ${p => p.theme.mainColor};
  color: ${p => p.theme.mainColor};
  &:hover {
    background: ${p => p.theme.lightColor_hover};
  }
  &:active {
    background: ${p => p.theme.lightColor_active};
  }
`;

export default Btn2;
