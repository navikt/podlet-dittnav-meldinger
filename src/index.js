import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./App";
import Providers from "./providers/Providers";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
} else {
  // Sentry.init({ dsn: "TODO: Legg inn din  egen sentry url" });
}

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("podlet-dittnav-meldinger")
);
