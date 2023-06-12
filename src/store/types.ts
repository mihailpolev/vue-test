import { PeopleState } from "./people/types";
import { FavoritesState } from "./favorites/types";

export interface RootState {
  version: string;
  people: PeopleState;
  favorites: FavoritesState;
}
