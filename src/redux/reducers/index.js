import { combineReducers } from "redux";
import { register, login } from "./authReducer";
import { categories } from "./categoriesReducer";
import { users } from "./usersReducer";

export const rootReducer = combineReducers({
  register,
  login,
  categories,
  users,
});
