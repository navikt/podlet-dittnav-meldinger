import "./App.css";
import Panel from "nav-frontend-paneler";
import Navn from "./components/navn";
import Status from "./components/status";
import useSWR from "swr";
import { AuthResponse, authUrl, fetcher } from "./api";

function App() {
  const { data: auth } = useSWR<AuthResponse>(authUrl, fetcher);

  return (
    <div className="podlet-template">
      <Panel border>
        <Navn navn={auth?.name} />
        <Status status={"registrert som arbeidssøker"} />
      </Panel>
    </div>
  );
}

export default App;
