export const buildApiUrl = (path) => {
  const apiBaseUrl = "www.api.nav.no/person/dittnav-api";

  return `${apiBaseUrl}${path || ""}`;
};

export const buildTestProducerUrl = (path) => {
  const testProducerBaseUrl = "www.api.nav.no/person/dittnav-event-test-producer";

  return `${testProducerBaseUrl}${path || ""}`;
};

export const buildTidslinjeUrl = (path, queryString) => {
  const tidslinjeBaseUrl = "www.api.nav.no/person/dittnav-tidslinje";

  return `${tidslinjeBaseUrl}${path || ""}${queryString || ""}`;
};

export const buildNavNoUrl = (path) => {
  const navNoBaseUrl = "www.api.nav.no";

  return `${navNoBaseUrl}${path || ""}`;
};

export const buildLoginserviceUrl = (level) => {
  const loginserviceUrl = "www.api.nav.no/loginservice";
  const loginServiceLevelFourUrl = "www.api.nav.no/loginservice";

  return level ? loginServiceLevelFourUrl : loginserviceUrl;
};
