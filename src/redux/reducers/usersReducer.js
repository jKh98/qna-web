import * as types from "../actions";

const usersReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.USERS_PENDING:
      return { ...state, pending: true };
    case types.GET_USERS_SUCCESS:
      return { ...state, ...response, error: "", pending: false };
    case types.GET_USERS_ERROR:
      return { error: error.message, pending: false };
    default:
      return state;
  }
};

export { usersReducer as users };
