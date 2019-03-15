import BtnBase from "../Btn";
import styled from "styled-components";
const Btn1 = styled(BtnBase).attrs({ className: "wj-btn__disabled" })`
  background: #e8e8e8;
  border-color: #dcdcdc;
  color: #ccc;
  cursor: not-allowed;
`;

export default Btn1;
