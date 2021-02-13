import { OPPFOLGING_URL, OPPGAVE_INAKTIV_URL, OPPGAVE_URL, SAKER_URL, SAKSTEMA_URL, TestProducer } from "./constants";
import { BESKJED_INAKTIV_URL, BESKJED_URL, DONE_URL, INNBOKS_INAKTIV_URL, INNBOKS_URL } from "./constants";
import { INNLOGGINGSSTATUS_URL, MELDEKORT_URL, MELDINGER_URL } from "./constants";

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

const fetchJSON = async (url) => {
  const response = await fetch(url, getOptions);
  const data = await response.json();
  return data;
};

const postJSON = (url, content) =>
  new Promise((resolve, reject) => {
    fetch(url, postOptions(content))
      .then((response) => response.headers)
      .then((headers) => resolve(headers))
      .catch((e) => reject(e));
  });

export const fetchMeldekort = () => fetchJSON(MELDEKORT_URL);

export const fetchSaker = () => fetchJSON(SAKER_URL);

export const fetchMeldinger = () => fetchJSON(MELDINGER_URL);

export const fetchSakstema = () => fetchJSON(SAKSTEMA_URL);

export const fetchInnloggingsstatus = () => fetchJSON(INNLOGGINGSSTATUS_URL);

export const fetchBeskjeder = () => fetchJSON(BESKJED_URL);

export const fetchOppgaver = () => fetchJSON(OPPGAVE_URL);

export const fetchInnbokser = () => fetchJSON(INNBOKS_URL);

export const fetchInaktiveBeskjeder = () => fetchJSON(BESKJED_INAKTIV_URL);

export const fetchInaktiveOppgaver = () => fetchJSON(OPPGAVE_INAKTIV_URL);

export const fetchInaktiveInnbokser = () => fetchJSON(INNBOKS_INAKTIV_URL);

export const postHendelse = (path, content) => postJSON(`${TestProducer.URL}/${path}`, content);

export const postDoneAll = () => postJSON(`${TestProducer.DONE_ALL_URL}`, null);

export const postDone = (content) => postJSON(`${DONE_URL}`, content);

export const postStatusoppdatering = (content) => postJSON(`${TestProducer.STATUSOPPDATERING_URL}`, content);
