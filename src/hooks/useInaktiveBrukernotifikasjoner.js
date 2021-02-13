import { useQuery } from "react-query";
import { fetchInaktiveBeskjeder } from "../Api";
import useStore from "./useStore";

const useInaktiveBeskjeder = () => {
  const { state, addInaktiveBeskjeder, setError } = useStore();

  useQuery("inaktiveBeskjeder", fetchInaktiveBeskjeder, {
    onSuccess: addInaktiveBeskjeder,
    onError: setError,
  });

  return state.inaktiveBeskjeder;
};

const useInaktiveBrukernotifikasjoner = () => [useInaktiveBeskjeder()];

export default useInaktiveBrukernotifikasjoner;
