import React from "react";
import { FormattedMessage as F } from "react-intl";
import useInngang from "../hooks/useInngang";
import InformasjonsMeldinger from "./meldinger/InformasjonsMeldinger";
import Brukernotifikasjoner from "./Brukernotifikasjoner";
import PaabegynteSoknader from "./meldinger/PaabegynteSoknader";
import Meldekort from "./meldinger/meldekort/Meldekort";
import EtterregistreringMeldekort from "./meldinger/EtterregistreringMeldekort";
import MinInnboks from "./meldinger/MinInnboks";
import InngangVarslinger from "./InngangVarslinger";
import { useQuery } from "react-query";
import { fetcher } from "../api";
import { BESKJED_INAKTIV_URL, INNBOKS_INAKTIV_URL, OPPGAVE_INAKTIV_URL } from "../constants";
import "../less/InfoMeldinger.less";

const InfoMeldinger = () => {
  const { data: inaktiveBeskjeder } = useQuery(BESKJED_INAKTIV_URL, fetcher);
  const { data: inaktiveOppgaver } = useQuery(OPPGAVE_INAKTIV_URL, fetcher);
  const { data: inaktiveInnbokser } = useQuery(INNBOKS_INAKTIV_URL, fetcher);

  const [visInngangTilVarslinger] = useInngang(inaktiveBeskjeder, inaktiveOppgaver, inaktiveInnbokser);

  return (
    <section className="infomeldinger-list">
      <h1 className="skjermleser">
        <F id="dittnav.infomeldinger.varsler" />
      </h1>
      <Meldekort />
      <Brukernotifikasjoner />
      <InformasjonsMeldinger />
      <EtterregistreringMeldekort />
      <PaabegynteSoknader />
      <MinInnboks />
      {visInngangTilVarslinger ? <InngangVarslinger /> : null}
    </section>
  );
};

export default InfoMeldinger;
