import { handleFetchErrors } from "../utils/api";

const { REACT_APP_BASE_URL } = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const registerUserService = async (user) => {
  let requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(user),
    redirect: "follow",
  };

  return fetch(REACT_APP_BASE_URL.concat("/auth/signup"), requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export const loginUserService = async (credentials) => {
  let requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(credentials),
    redirect: "follow",
  };

  return fetch(REACT_APP_BASE_URL.concat("/auth/login"), requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
