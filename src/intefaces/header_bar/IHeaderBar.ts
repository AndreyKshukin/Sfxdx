import { ISearchBar } from "./ISearch";

export interface IHeaderBar {
  search?: ISearchBar,
  backFunction?: () => any
}