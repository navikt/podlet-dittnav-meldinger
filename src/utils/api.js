export const buildApiUrl = (path) => {
  const apiBaseUrl = "https://www.api.nav.no/person/dittnav-api";

  return `${apiBaseUrl}${path || ""}`;
};

export const buildTestProducerUrl = (path) => {
  const testProducerBaseUrl = "https://www.api.nav.no/person/dittnav-event-test-producer";

  return `${testProducerBaseUrl}${path || ""}`;
};

export const buildTidslinjeUrl = (path, queryString) => {
  const tidslinjeBaseUrl = "https://www.api.nav.no/person/dittnav-tidslinje";

  return `${tidslinjeBaseUrl}${path || ""}${queryString || ""}`;
};

export const buildNavNoUrl = (path) => {
  const navNoBaseUrl = "https://www.api.nav.no";

  return `${navNoBaseUrl}${path || ""}`;
};

export const buildLoginserviceUrl = (level) => {
  const loginserviceUrl = "https://www.api.nav.no/loginservice";
  const loginServiceLevelFourUrl = "https://www.api.nav.no/loginservice";

  return level ? loginServiceLevelFourUrl : loginserviceUrl;
};
