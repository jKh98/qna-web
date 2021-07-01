import * as types from "./index";

export const getCategoriesAction = (query = "") => ({
  type: types.GET_CATEGORIES,
  query,
});

export const getCategoryByIdAction = (id) => ({
  type: types.GET_CATEGORY_BY_ID,
  id,
});
