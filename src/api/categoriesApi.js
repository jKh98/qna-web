import { handleFetchErrors } from "../utils/api";

const { REACT_APP_BASE_URL } = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getCategoriesService = async (request) => {
  let requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  return fetch(REACT_APP_BASE_URL.concat("/categories"), requestOptions)
    .then((response) => handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
