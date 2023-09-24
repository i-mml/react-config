import userInfoReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  userInfoReducer,
});

export default allReducers;
