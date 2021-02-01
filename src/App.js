import React from "react";
import "./App.css";
import InfoMeldinger from "./components/Infomeldinger";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Varslinger from "./pages/Varslinger/Varslinger";
import DittnavLenkePanel from "./components/DittnavLenkePanel";

const App = () => {
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
