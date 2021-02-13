import React from "react";
import "./App.css";
import InfoMeldinger from "./components/Infomeldinger";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Varslinger from "./pages/Varslinger/Varslinger";
import DittnavLenkePanel from "./components/DittnavLenkePanel";
import { useQuery } from "react-query";
import { fetchInaktiveInnbokser, fetchOppgaver } from "./Api";
import { fetchInaktiveOppgaver, fetchInnbokser, fetchOppfolging, fetchSaker, fetchSakstema } from "./Api";
import { fetchMeldekort, fetchMeldinger, fetchInnloggingsstatus } from "./Api";
import useBrukernotifikasjoner from "./hooks/useBrukernotifikasjoner";
import useInaktiveBrukernotifikasjoner from "./hooks/useInaktiveBrukernotifikasjoner";

const App = () => {
  useBrukernotifikasjoner();
  useInaktiveBrukernotifikasjoner();

  useQuery("oppgaver", fetchOppgaver);
  useQuery("innbokser", fetchInnbokser);
  useQuery("inaktiveOppgaver", fetchInaktiveOppgaver);
  useQuery("inaktiveInnbokser", fetchInaktiveInnbokser);

  useQuery("oppfolging", fetchOppfolging);
  useQuery("meldekort", fetchMeldekort);
  useQuery("meldinger", fetchMeldinger);
  useQuery("sakstema", fetchSakstema);
  useQuery("paabegynteSoknader", fetchSaker);
  useQuery("innloggingsstatus", fetchInnloggingsstatus);

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
