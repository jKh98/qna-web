import * as types from "../actions";

const loginReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.LOGIN_USER_PENDING:
      return { ...state, pending: true };

    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...response, error: "", pending: false };

    case types.LOGIN_USER_ERROR:
      return { error: error.message, pending: false };

    case types.SAVE_PREAUTH_PATH:
      return { ...state, preAuthPath: window.location.pathname };

    case types.LOGOUT_USER:
      return {};

    default:
      return state;
  }
};

const registerReducer = (state = {}, { type, response, error }) => {
  switch (type) {
    case types.REGISTER_USER_PENDING:
      return { ...state, pending: true };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        error: "",
        success: "You have successfully registered.",
        pending: false,
      };
    case types.REGISTER_USER_ERROR:
      return { error: error.message, pending: false };
    default:
      return state;
  }
};

export { loginReducer as login, registerReducer as register };
