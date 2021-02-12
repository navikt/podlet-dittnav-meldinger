import { useQuery } from "react-query";
import { fetchOppfolging, fetchMeldekort, fetchMeldinger } from "../Api";
import useStore from "./useStore";

export const useOppfolging = () => [useQuery("oppfolging", fetchOppfolging, { onError: useStore().setError })];

export const useMeldekort = () => [useQuery("meldekort", fetchMeldekort, { onError: useStore().setError })];

export const useMeldinger = () => [useQuery("meldinger", fetchMeldinger, { onError: useStore().setError })];

const usePerson = () => [useOppfolging(), useMeldekort(), useMeldinger()];

export default usePerson;
