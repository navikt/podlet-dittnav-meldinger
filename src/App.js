import React from "react";
import "./App.css";
import InfoMeldinger from "./components/Infomeldinger";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Varslinger from "./pages/Varslinger/Varslinger";
import DittnavLenkePanel from "./components/DittnavLenkePanel";
import useBrukernotifikasjoner from "./hooks/useBrukernotifikasjoner";
import useInaktiveBrukernotifikasjoner from "./hooks/useInaktiveBrukernotifikasjoner";
import usePerson from "./hooks/usePerson";
import useSaker from "./hooks/useSaker";
import useInnloggingsstatus from "./hooks/useInnloggingsstatus";

const App = () => {
  useBrukernotifikasjoner();
  useInaktiveBrukernotifikasjoner();
  usePerson();
  useSaker();
  useInnloggingsstatus();

  return (
    <div className="podlet-dittnav-meldinger">
      <InfoMeldinger />
      <DittnavLenkePanel />
      <Router basename="/person">
        <ScrollToTop />
        <Switch>
          <Route path="/layout-dittnav/varslinger" exact component={Varslinger} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
