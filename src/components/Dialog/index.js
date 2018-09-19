import Dialog from "./Dialog";
import Hoc from "wowjoy-component/lib/tools/Hoc";
import dark from "./types/dark";
import Dialog_Confirm from "./types/Confirm";

export const DialogDark = Hoc(dark)(Dialog);
export const DialogConfirm = Dialog_Confirm;
export default Dialog;
