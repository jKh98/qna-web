import * as types from "../actions";

const registerReducer = (state = [], action) => {
  let response = action.response;

  switch (action.type) {
    case types.REGISTER_USER_PENDING:
      return { ...state, pending: true };
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response, pending: false };
    case types.REGISTER_USER_ERROR:
      return { ...state, response, pending: false };
    default:
      return state;
  }
};

export default registerReducer;
