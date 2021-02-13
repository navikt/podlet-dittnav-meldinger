import React from "react";
import { FormattedMessage } from "react-intl";
import { Undertittel } from "nav-frontend-typografi";
import HoyreChevron from "nav-frontend-chevron";
import { VARSLINGER_URL } from "../constants";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from "../utils/googleAnalytics";

const InngangVarslinger = () => (
  <div className="varslinger-inngang-wrapper">
    <Undertittel className="varslinger-inngang">
      <a
        id="varslinger-inngang__lenke-id"
        href={VARSLINGER_URL}
        onClick={() =>
          trackEvent(GoogleAnalyticsCategory.Forside, GoogleAnalyticsAction.Varslinger, `${VARSLINGER_URL}`)
        }
      >
        <FormattedMessage id="dittnav.infomeldinger.inngang.varslinger" />
      </a>
      <HoyreChevron className="varslinger-inngang__chevron" />
    </Undertittel>
  </div>
);

export default InngangVarslinger;
