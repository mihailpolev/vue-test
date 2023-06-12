import { MutationTree } from "vuex";
import { PeopleState } from "./types";
import { People } from "@/types/people";

export const mutations: MutationTree<PeopleState> = {
  setPeoples(state, payload: People[]) {
    state.error = false;
    state.peoples = payload;
  },
  setCount(state, payload: number) {
    state.count = payload;
  },
  setPage(state, payload: number) {
    state.page = payload;
  },
  setNext(state, payload: string) {
    state.next = payload;
  },
  setPrevious(state, payload: string) {
    state.previous = payload;
  },
  setError(state, payload: boolean) {
    state.error = payload;
  },
  setLoading(state, payload: boolean) {
    state.loading = payload;
  },
  setSearchResult(state, payload: People[]) {
    state.searchResult = payload;
  },
  setSearchLoading(state, payload: boolean) {
    state.searchLoading = payload;
  },
};
