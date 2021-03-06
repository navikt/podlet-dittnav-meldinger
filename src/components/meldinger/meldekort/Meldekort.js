import React from "react";
import { FormattedMessage as F, useIntl } from "react-intl";
import { MELDEKORT_PATH, MELDEKORT_URL } from "../../../constants";
import i18n from "../../../language/i18n";
import PanelOverskrift from "../../common/PanelOverskrift";
import LenkepanelMedIkon from "../../common/LenkepanelMedIkon";
import { advarsel, feriedager, fremtidig, melding, trekk } from "./Meldinger";
import IkonBeskjed from "../../../assets/IkonBeskjed";
import IkonOppgave from "../../../assets/IkonOppgave";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory } from "../../../utils/googleAnalytics";
import { buildNavNoUrl } from "../../../utils/api";
import { useQuery } from "react-query";
import { fetcher } from "../../../api";

const isMeldekortbruker = (meldekort) => (meldekort ? meldekort.meldekortbruker : false);

const Meldekort = () => {
  const { data: meldekort, isSuccess } = useQuery(MELDEKORT_URL, fetcher);
  const intl = useIntl();

  if (!isSuccess || !meldekort || !isMeldekortbruker(meldekort)) {
    return null;
  }

  const { formatDateMonth, formatDayAndMonth, numberToWord } = i18n[intl.locale];
  const { antallNyeMeldekort } = meldekort.nyeMeldekort;
  const risikererTrekk = meldekort.nyeMeldekort?.nesteMeldekort?.risikererTrekk;

  const overskrift = (klarForInnsending) =>
    klarForInnsending ? (
      <>
        <span>{fremtidig(meldekort.nyeMeldekort, formatDateMonth)} </span>
        <span>
          {melding(meldekort.nyeMeldekort.nesteMeldekort, antallNyeMeldekort, formatDayAndMonth, numberToWord)}{" "}
        </span>
        <span>{trekk(!risikererTrekk, formatDateMonth, meldekort.nyeMeldekort.nesteMeldekort)} </span>
        <span>{advarsel(risikererTrekk)} </span>
      </>
    ) : (
      <>
        <span>{fremtidig(meldekort.nyeMeldekort, formatDateMonth)} </span>
        <span>{advarsel(risikererTrekk)} </span>
      </>
    );

  const ingress = (klarForInnsending) =>
    klarForInnsending ? (
      <>
        <span>
          {feriedager(meldekort)}{" "}
          {antallNyeMeldekort > 1 ? <F id="meldekort.se.oversikt" /> : <F id="meldekort.send" />}.
        </span>
      </>
    ) : (
      <>{feriedager(meldekort)}</>
    );

  if (antallNyeMeldekort > 0) {
    return (
      <LenkepanelMedIkon
        className="infomelding oppgave"
        alt="Melding om meldekort"
        overskrift={<PanelOverskrift overskrift={overskrift(true)} type="Element" />}
        ingress={ingress(true)}
        href={`${buildNavNoUrl(MELDEKORT_PATH)}`}
        gaCategory={GoogleAnalyticsCategory.Forside}
        gaAction={GoogleAnalyticsAction.MeldekortKlar}
      >
        <IkonOppgave />
      </LenkepanelMedIkon>
    );
  }

  if (meldekort.nyeMeldekort.nesteInnsendingAvMeldekort) {
    return (
      <LenkepanelMedIkon
        className="infomelding meldekort-innsendt"
        alt="Melding om meldekort"
        overskrift={<PanelOverskrift overskrift={overskrift(false)} type="Element" />}
        ingress={ingress(false)}
        href={`${buildNavNoUrl(MELDEKORT_PATH)}`}
        gaCategory={GoogleAnalyticsCategory.Forside}
        gaAction={GoogleAnalyticsAction.MeldekortVent}
      >
        <IkonBeskjed />
      </LenkepanelMedIkon>
    );
  }
  return null;
};

export default Meldekort;
