import Dialog from "./Dialog";
import Hoc from "wowjoy-component/lib/tools/Hoc";
import dark from "./types/dark";

export const Dialog_Dark = Hoc(dark)(Dialog);
export Dialog_Confirm from "./types/Confirm";
export default Dialog;
