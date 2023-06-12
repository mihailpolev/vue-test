import { People } from "@/types/people";

export interface PeopleState {
  peoples: People[];
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  error: boolean;
  loading: boolean;
  searchResult: People[];
  searchLoading: boolean;
}
