import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import "./index.css";
import App from "./App";
import Providers from "./providers/Providers";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
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
