import React from "react";
import { arrayOf } from "prop-types";
import Beskjed from "./brukernotifikasjoner/Beskjed";
import Oppgave from "./brukernotifikasjoner/Oppgave";
import Innboks from "./brukernotifikasjoner/Innboks";
import { byEventTidspunkt } from "../utils/datoUtils";
import BeskjedType from "../types/BeskjedType";
import OppgaveType from "../types/OppgaveType";
import InnboksType from "../types/InnboksType";
import { useQuery } from "react-query";
import { fetcher } from "../api";
import { BESKJED_URL, INNBOKS_URL, INNLOGGINGSSTATUS_URL, OPPGAVE_URL } from "../constants";

const Brukernotifikasjoner = () => {
  const { data: beskjeder } = useQuery(BESKJED_URL, fetcher);
  const { data: oppgaver } = useQuery(OPPGAVE_URL, fetcher);
  const { data: innbokser } = useQuery(INNBOKS_URL, fetcher);
  const { data: innloggingsstatus, isSuccess: isSuccessInnloggingsstatus } = useQuery(INNLOGGINGSSTATUS_URL, fetcher);

  if (!isSuccessInnloggingsstatus) {
    return null;
  }

  return (
    <>
      {oppgaver &&
        innloggingsstatus &&
        oppgaver
          .sort(byEventTidspunkt)
          .map((o) => <Oppgave key={o.eventId} oppgave={o} innloggingsstatus={innloggingsstatus} />)}
      {beskjeder &&
        innloggingsstatus &&
        beskjeder
          .sort(byEventTidspunkt)
          .map((b) => <Beskjed key={b.uid} beskjed={b} beskjeder={b} innloggingsstatus={innloggingsstatus} />)}
      {innbokser &&
        innloggingsstatus &&
        innbokser
          .sort(byEventTidspunkt)
          .map((i) => <Innboks key={i.eventId} innboks={i} innloggingsstatus={innloggingsstatus} />)}
    </>
  );
};

Brukernotifikasjoner.propTypes = {
  beskjeder: arrayOf(BeskjedType),
  oppgaver: arrayOf(OppgaveType),
  innbokser: arrayOf(InnboksType),
};

Brukernotifikasjoner.defaultProps = {
  beskjeder: null,
  oppgaver: null,
  innbokser: null,
};

export default Brukernotifikasjoner;
