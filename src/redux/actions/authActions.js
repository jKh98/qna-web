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

export const savePreAuthPathAction = () => {
  return {
    type: types.SAVE_PREAUTH_PATH,
  };
};

export const logoutUserAction = () => {
  return {
    type: types.LOGOUT_USER,
  };
};
