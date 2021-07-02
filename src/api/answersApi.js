import { handleFetchErrors } from "../utils/api";

const { REACT_APP_BASE_URL } = process.env;

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getAnswersByQuestionService = async (questionId, query) => {
  let requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  let url = new URL(
    REACT_APP_BASE_URL.concat(`/questions/${questionId}/answers`)
  );
  url.search = query + "&sort=createdAt,desc";

  return fetch(url, requestOptions)
    .then(async (response) => await handleFetchErrors(response))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
