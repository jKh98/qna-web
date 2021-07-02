import { handleFetchErrors } from "../utils/api";

const { REACT_APP_BASE_URL } = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getCategoriesService = async (query) => {
  let requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  let url = new URL(REACT_APP_BASE_URL.concat("/categories"));
  url.search = query;

  return fetch(url, requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export const getCategorybyIdService = async (id) => {
  let requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  let url = new URL(REACT_APP_BASE_URL.concat(`/categories/${id}`));

  return fetch(url, requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
