import { handleFetchErrors } from "../utils/api";

const { REACT_APP_BASE_URL } = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getQuestionsService = async (query) => {
  let requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  let url = new URL(REACT_APP_BASE_URL.concat("/questions"));
  url.search = query;

  return fetch(url, requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export const getQuestionsByCategoryService = async (categoryId, query) => {
  let requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  let url = new URL(
    REACT_APP_BASE_URL.concat(`/categories/${categoryId}/questions`)
  );
  url.search = query;

  return fetch(url, requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
