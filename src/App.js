import React from "react";
import "./App.css";
import InfoMeldinger from "./components/Infomeldinger";
import DittnavLenkePanel from "./components/DittnavLenkePanel";

const App = () => (
  <div className="podlet-dittnav-meldinger">
    <InfoMeldinger />
    <DittnavLenkePanel />
  </div>
);

export default App;
