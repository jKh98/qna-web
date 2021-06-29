import { handleFetchErrors } from "../utils/api";

const BASE_URL = "http://localhost:8080/api/v1";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const registerUserService = async (request) => {
  let requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(request.user),
    redirect: "follow",
  };

  return fetch(BASE_URL.concat("/auth/signup"), requestOptions)
    .then((response) => handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export const loginUserService = async (request) => {
  let requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(request.user),
    redirect: "follow",
  };

  return fetch(BASE_URL.concat("/auth/login"), requestOptions)
    .then((response) => handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
