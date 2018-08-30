import Nav from "./Nav";
import Hoc from "wowjoy-component/lib/tools/Hoc";
import type1 from "./types/type1";
import NavContent from "./NavContent";

export const Type1 = Hoc(type1)(Nav);

export { NavContent };
export default Nav;
