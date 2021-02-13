import { useQuery } from "react-query";
import { fetcher } from "../api";
import useStore from "./useStore";
import { BESKJED_INAKTIV_URL } from "../constants";

const useInaktiveBeskjeder = () => {
  const { state, addInaktiveBeskjeder, setError } = useStore();

  useQuery(BESKJED_INAKTIV_URL, fetcher, {
    onSuccess: addInaktiveBeskjeder,
    onError: setError,
  });

  return state.inaktiveBeskjeder;
};

const useInaktiveBrukernotifikasjoner = () => [useInaktiveBeskjeder()];

export default useInaktiveBrukernotifikasjoner;
