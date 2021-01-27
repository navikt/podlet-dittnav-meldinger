import React from "react";
import "./App.css";
import InfoMeldinger from "./components/Infomeldinger";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Varslinger from "./pages/Varslinger/Varslinger";

const App = () => {
  return (
    <div className="podlet-dittnav-meldinger">
      <InfoMeldinger />
      <Router basename="/person">
        <ScrollToTop />
        <Switch>
          <Route path="/dittnav/varslinger" exact component={Varslinger} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
