import { combineReducers } from "redux";
import { register, login } from "./authReducer";
import { categories } from "./categoriesReducer";
import { questions } from "./questionsReducer";
import { answers } from "./answersReducer";
import { users } from "./usersReducer";

export const rootReducer = combineReducers({
  register,
  login,
  categories,
  questions,
  answers,
  users,
});
