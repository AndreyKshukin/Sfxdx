import { IAppState } from "@intefaces";
import { CharactersModel } from "@models";


export interface AppModel extends IAppState {
  characters: CharactersModel,
  currentCharacterId: string | null,
  searchTerm?: string,
}