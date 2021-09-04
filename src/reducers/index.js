import { combineReducers } from "redux";
import changeTheNumber from "./upDown";
import mulDivTheNumber from "./mulDiv";

const rootReducers = combineReducers({
    changeTheNumber,
    mulDivTheNumber
})

export default rootReducers;