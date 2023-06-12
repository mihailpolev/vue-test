import { InjectionKey } from "vue";
import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex";
import createPersistedState from "vuex-persistedstate";
import { RootState } from "./types";
import { people } from "./people/index";
import { favorites } from "./favorites/index";

const debug = process.env.NODE_ENV !== "production";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    people,
    favorites,
  },
  state: {
    version: "0.0.1",
  } as RootState,
  strict: debug,
  plugins: debug
    ? [createPersistedState(), createLogger()]
    : [createPersistedState()],
});

export function useStore() {
  return baseUseStore(key);
}
