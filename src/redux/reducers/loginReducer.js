import * as types from "../actions";

const loginReducer = (state = [], action) => {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_USER_PENDING:
      return { ...state, pending: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response, pending: false };
    case types.LOGIN_USER_ERROR:
      return { ...state, response, pending: false };
    default:
      return state;
  }
};

export default loginReducer;
