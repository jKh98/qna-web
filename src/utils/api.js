export async function handleFetchErrors(response) {
  const json = await response.json();

  if (!response.ok) {
    throw Error(json?.message);
  }

  return json;
}
