import { ActionTree } from "vuex";
import { PeopleState } from "./types";
import { RootState } from "../types";
import { getPeoples } from "@/api/getPeoplesApi";
import { People } from "@/types/people";
import { searchPeople } from "@/api/searchPeopleApi";

export const actions: ActionTree<PeopleState, RootState> = {
  async getAllPeoples({ commit }, page: number) {
    commit("setLoading", true);

    const result = await getPeoples(page);
    const peoples: People[] = result.results;
    const count: number = result.count;
    const next: string | null = result.next;
    const previous: string | null = result.previous;

    commit("setPeoples", peoples);
    commit("setCount", count);
    commit("setNext", next);
    commit("setPrevious", previous);
    commit("setLoading", false);
  },
  async searchPeople({ commit }, search: string) {
    commit("setSearchLoading", true);

    const result = await searchPeople(search);
    const peoples: People[] = result.results;

    commit("setSearchResult", peoples);
    commit("setSearchLoading", false);
  },
  async cleanSearchResult({ commit }) {
    commit("searchResult", []);
    commit("setSearchLoading", false);
  },
};
