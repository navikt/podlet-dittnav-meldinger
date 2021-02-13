import React from "react";
import { FormattedMessage as F, useIntl } from "react-intl";
import i18n from "../../language/i18n";
import LenkepanelMedIkon from "../common/LenkepanelMedIkon";
import PanelOverskrift from "../common/PanelOverskrift";
import IkonBeskjed from "../../assets/IkonBeskjed";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory } from "../../utils/googleAnalytics";
import { usePaabegynteSoknader } from "../../hooks/useSaker";
import "../../less/PaabegynteSoknader.less";

const hasContent = (paabegynteSoknader) => paabegynteSoknader && paabegynteSoknader;

const hasNoPaabegynteSoknader = (paabegynteSoknader) => paabegynteSoknader && paabegynteSoknader.antallPaabegynte === 0;

const createOverskrift = (paabegynteSoknader, soknadstekst, intl) => (
  <PanelOverskrift
    overskrift={
      <F id={soknadstekst} values={{ count: i18n[intl.locale].numberToWord(paabegynteSoknader.antallPaabegynte) }} />
    }
    type="Element"
  />
);

const PaabegynteSoknader = () => {
  const [{ data: paabegynteSoknader, isSuccess }] = usePaabegynteSoknader();
  const intl = useIntl();

  if (!isSuccess || !hasContent(paabegynteSoknader) || hasNoPaabegynteSoknader(paabegynteSoknader)) {
    return null;
  }

  const soknadstekst =
    paabegynteSoknader && paabegynteSoknader.antallPaabegynte === 1
      ? "saksoversikt.soknad.en"
      : "saksoversikt.soknad.flere";

  return (
    <LenkepanelMedIkon
      className="infomelding paabegynte-soknader"
      alt="Melding om Søknader"
      overskrift={createOverskrift(paabegynteSoknader, soknadstekst, intl)}
      ingress={<F id="saksoversikt.lenke" />}
      href={paabegynteSoknader.url}
      gaCategory={GoogleAnalyticsCategory.Forside}
      gaAction={GoogleAnalyticsAction.PaabegynteSoknader}
    >
      <IkonBeskjed />
    </LenkepanelMedIkon>
  );
};

export default PaabegynteSoknader;
