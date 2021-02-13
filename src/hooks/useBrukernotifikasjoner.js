import { useQuery } from "react-query";
import { fetchBeskjeder } from "../api";
import useStore from "./useStore";

const useBeskjeder = () => {
  const { state, addBeskjeder, setError } = useStore();

  useQuery("beskjeder", fetchBeskjeder, {
    onSuccess: addBeskjeder,
    onError: setError,
  });

  return state.beskjeder;
};

const useBrukernotifikasjoner = () => [useBeskjeder()];

export default useBrukernotifikasjoner;
