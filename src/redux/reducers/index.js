import { combineReducers } from "redux";
import { register, login } from "./authReducer";

export const rootReducer = combineReducers({
  register,
  login,
});
