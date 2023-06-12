import { GetterTree } from "vuex";
import { FavoritesState } from "./types";
import { RootState } from "../types";
import { People } from "@/types/people";

export const getters: GetterTree<FavoritesState, RootState> = {
  peopleList(state): People[] {
    const { peoples } = state;
    return peoples;
  },
};
