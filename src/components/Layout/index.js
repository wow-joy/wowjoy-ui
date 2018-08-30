import Layout from './Layout';
import Hoc from 'wowjoy-component/lib/tools/Hoc';
import type1 from "./types/type1";

export const Type1 = Hoc(type1)(Layout);
export default Layout