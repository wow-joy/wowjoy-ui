import Pagination from './Pagination';
import Hoc from 'wowjoy-component/lib/tools/Hoc';
import { Pagination as PainationBase } from "wowjoy-component";
import type1 from "./types/type1";

export const Type1 = Hoc(type1)(PainationBase);
export default Type1