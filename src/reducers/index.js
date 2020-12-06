import { combineReducers } from "redux";
import todos from "./todos"

const mainReducer = combineReducers({
    todos
})

export default mainReducer;