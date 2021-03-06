import React from "react";
import { FormattedMessage as F, useIntl } from "react-intl";
import { ETTERREGISTRERTE_MELDEKORT_PATH, MELDEKORT_URL } from "../../constants";
import i18n from "../../language/i18n";
import LenkepanelMedIkon from "../common/LenkepanelMedIkon";
import PanelOverskrift from "../common/PanelOverskrift";
import IkonOppgave from "../../assets/IkonOppgave";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory } from "../../utils/googleAnalytics";
import { buildNavNoUrl } from "../../utils/api";
import { useQuery } from "react-query";
import { fetcher } from "../../api";

const tallordForMeldekort = (antallMeldekort, translater) =>
  antallMeldekort === 1 ? translater.oneNeuter() : translater.numberToWord(antallMeldekort);

const createOverskrift = (ettereg, intl) => {
  const overskrift = (
    <F
      id="meldekort.etterregistreringer"
      values={{ etterregistreringer: tallordForMeldekort(ettereg.etterregistrerteMeldekort, i18n[intl.locale]) }}
    />
  );

  return <PanelOverskrift overskrift={overskrift} type="Element" />;
};

const EtterregistreringMeldekort = () => {
  const { data: meldekort, isSuccess } = useQuery(MELDEKORT_URL, fetcher);
  const intl = useIntl();

  if (!isSuccess) {
    return null;
  }

  if (meldekort.etterregistrerteMeldekort && meldekort.etterregistrerteMeldekort > 0) {
    return (
      <LenkepanelMedIkon
        className="infomelding oppgave"
        alt="Melding om etterregistrerte meldekort"
        overskrift={createOverskrift(meldekort, intl)}
        href={`${buildNavNoUrl(ETTERREGISTRERTE_MELDEKORT_PATH)}`}
        gaCategory={GoogleAnalyticsCategory.Forside}
        gaAction={GoogleAnalyticsAction.EtterregistrerteMeldekort}
      >
        <IkonOppgave />
      </LenkepanelMedIkon>
    );
  }
  return null;
};

export default EtterregistreringMeldekort;
