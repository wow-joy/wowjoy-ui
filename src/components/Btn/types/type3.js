import BtnBase from "../Btn";
import styled from "styled-components";
const Btn3 = styled(BtnBase).attrs({ className: "wj-btn__3" })`
  background: #f5f5f5;
  border-color: #dcdcdc;
  color: #666;
  &:hover {
    background: #fff;
    border-color: #ccc;
  }
  &:active {
    background: #f0f0f0;
    border-color: #ccc;
  }
`;

export default Btn3;
