import * as types from "./index";

export const getUsersAction = (query = "") => ({
  type: types.GET_USERS,
  query,
});
