import Nav from "./Nav";
import Hoc from "wowjoy-component/lib/tools/Hoc";
import type1 from "./types/type1";
import NavItem from "./NavItem/NavItem";

export const Type1 = Hoc(type1)(Nav);

export { NavItem };
export default Nav;
