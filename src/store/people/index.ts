import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { PeopleState } from "./types";
import { RootState } from "../types";

export const state: PeopleState = {
  peoples: [],
  count: 0,
  next: null,
  previous: null,
  page: 1,
  error: false,
  loading: false,
  searchResult: [],
  searchLoading: false,
};

const namespaced = true;

export const people: Module<PeopleState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
