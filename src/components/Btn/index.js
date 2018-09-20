import Btn from "./Btn";
import { Hoc } from "wowjoy-component/es/tools";
import type1 from "./types/type1";
import type2 from "./types/type2";
import type3 from "./types/type3";
import disabled from "./types/disabled";

export const Btn1 = Hoc(type1)(Btn);
export const Btn2 = Hoc(type2)(Btn);
export const Btn3 = Hoc(type3)(Btn);
export const BtnDisabled = Hoc(disabled)(Btn);
export default Btn;
