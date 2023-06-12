import { ActionTree } from "vuex";
import { FavoritesState } from "./types";
import { RootState } from "../types";
import { People } from "@/types/people";

export const actions: ActionTree<FavoritesState, RootState> = {
  async addToFavorites({ commit }, people: People) {
    commit("add", people);
  },
  async removeFromFavorites({ commit }, people: People) {
    commit("remove", people);
  },
};
