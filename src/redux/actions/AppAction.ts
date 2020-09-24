import { IAction } from "@intefaces"

export const AppAction = {
  GET_CHARACTERS: 'AppAction.GET_DEALS',
  CHARACTERS_LOADED: 'AppAction.DEALS_LOADED',
  SHOW_CHARACTER_LIST: 'AppAction.SHOW_DEAL_LIST',
  SHOW_CHARACTER_DETAIL: 'AppAction.SHOW_DEAL_DETAIL',

  getCharacters: (searchTerm?: string | '') => getCharacters(searchTerm),
  setCurrentCharacters: (searchTerm: string) => setCurrentCharacters(searchTerm),
  unsetCurrentCharacter: () => unsetCurrentCharacter(),
}


const getCharacters = (searchTerm?: string | ''): IAction<String, void> => {
  return {
      payload: searchTerm,
      type: AppAction.GET_CHARACTERS
  }
}

const setCurrentCharacters = (charactersId: string): IAction<string, void> => {
  return {
      payload: charactersId,
      type: AppAction.SHOW_CHARACTER_DETAIL
  }
}

const unsetCurrentCharacter = (): IAction<void, void> => {
  return {
      type: AppAction.SHOW_CHARACTER_LIST
  }
}