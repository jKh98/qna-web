import * as types from "./index";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = (credentials) => {
  return {
    type: types.LOGIN_USER,
    credentials,
  };
};

export const loadUserAction = (response) => {
  return {
    type: types.LOAD_USER,
    response,
  };
};
