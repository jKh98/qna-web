import * as types from "./index";

export const getCategoriesAction = (query = "") => ({
  type: types.GET_CATEGORIES,
  query,
});
