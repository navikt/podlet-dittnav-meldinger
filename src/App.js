import React from "react";
import InfoMeldinger from "./components/Infomeldinger";
import DittnavLenkePanel from "./components/DittnavLenkePanel";
import useSWR from "swr";
import { swrFetcher } from "./api";

const App = () => {
  const { data: navn } = useSWR("https://www.dev.nav.no/person/dittnav-api/personalia/navn", swrFetcher);
  const { data: beskjeder } = useSWR("https://www.dev.nav.no/person/dittnav-api/beskjed", swrFetcher);

  console.log(beskjeder);
  console.log(navn);

  return (
    <div className="podlet-dittnav-meldinger">
      <InfoMeldinger />
      <DittnavLenkePanel />
    </div>
  );
};

export default App;
