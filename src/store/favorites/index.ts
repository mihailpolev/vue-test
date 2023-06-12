import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { FavoritesState } from "./types";
import { RootState } from "../types";

export const state: FavoritesState = {
  peoples: [],
};

const namespaced = true;

export const favorites: Module<FavoritesState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
