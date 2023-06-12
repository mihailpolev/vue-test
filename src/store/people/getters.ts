import { GetterTree } from "vuex";
import { PeopleState } from "./types";
import { RootState } from "../types";
import { People } from "@/types/people";

export const getters: GetterTree<PeopleState, RootState> = {
  peopleList(state): People[] {
    const { peoples } = state;
    return peoples;
  },
};
