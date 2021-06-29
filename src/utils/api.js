export function handleFetchErrors(response) {
  const json = response.json();
  if (!response.ok) {
    throw Error(json?.message || "An error has occured");
  }
  return json;
}
