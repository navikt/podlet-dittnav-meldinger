import { useQuery } from "react-query";
import { fetcher } from "../api";
import useStore from "./useStore";
import { BESKJED_URL } from "../constants";

const useBeskjeder = () => {
  const { state, addBeskjeder, setError } = useStore();

  useQuery(BESKJED_URL, fetcher, {
    onSuccess: addBeskjeder,
    onError: setError,
  });

  return state.beskjeder;
};

const useBrukernotifikasjoner = () => [useBeskjeder()];

export default useBrukernotifikasjoner;
