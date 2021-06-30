import { combineReducers } from "redux";
import { register, login } from "./authReducer";
import { categories } from "./categoriesReducer";

export const rootReducer = combineReducers({
  register,
  login,
  categories,
});
