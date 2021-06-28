const BASE_URL = "http://localhost:8080/api/v1";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const registerUserService = (request) => {
  var requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(request.user),
    redirect: "follow",
  };

  return fetch(BASE_URL.concat("/auth/signup"), requestOptions).then(
    (response) => response.json()
  );
};

export const loginUserService = (request) => {
  var requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(request.user),
    redirect: "follow",
  };

  return fetch(BASE_URL.concat("/auth/login"), requestOptions).then(
    (response) => response.json()
  );
};
