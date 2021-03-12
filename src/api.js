import { DONE_URL, TestProducer } from "./constants";

export const tokenExpiresSoon = (headers) => headers.get("x-token-expires-soon");

const getOptions = {
  method: "GET",
  credentials: "include",
};

const postOptions = (content) => ({
  method: "POST",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(content),
});

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const swrFetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, getOptions);
  checkResponse(response);

  return response.json();
};

const postJSON = (url, content) =>
  new Promise((resolve, reject) => {
    fetch(url, postOptions(content))
      .then((response) => response.headers)
      .then((headers) => resolve(headers))
      .catch((e) => reject(e));
  });

export const postDone = (content) => {
  return postJSON(`${DONE_URL}`, content);
};
