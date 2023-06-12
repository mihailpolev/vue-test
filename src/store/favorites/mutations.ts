import { MutationTree } from "vuex";
import { FavoritesState } from "./types";
import { People } from "@/types/people";

export const mutations: MutationTree<FavoritesState> = {
  add(state, payload: People) {
    state.peoples = [...[payload], ...state.peoples];
  },
  remove(state, payload: People) {
    const list = state.peoples;
    const index = list.indexOf(payload);

    if (index !== -1) {
      list.splice(index, 1);
    }

    state.peoples = list;
  },
};
