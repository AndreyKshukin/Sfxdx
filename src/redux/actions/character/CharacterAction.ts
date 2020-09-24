import { IAction } from "@intefaces"

import { CharacterModel } from "@models"

export const CharacterDetailAction = {
  INITIAL_DETAIL: 'CharacterDetailAction.INITIAL_DETAIL',
  CHARACTER_FETCHED: 'CharacterDetailAction.CHARACTER_FETCHED',
  CHARACTER_FETCH_DETAIL: 'CharacterDetailAction.CHARACTER_FETCH_DETAIL',

  fetchDetail: (characterId: string) => fetchDetail(characterId),
  initialDeal: (character: CharacterModel) => initialDeal(character)
}


const fetchDetail = (characterId: string): IAction<string, void> => {
  return {
    payload: characterId,
    type: CharacterDetailAction.CHARACTER_FETCH_DETAIL
  }
}


const initialDeal = (character: CharacterModel): IAction<string, CharacterModel> => {
  return {
    data: character,
    type: CharacterDetailAction.INITIAL_DETAIL
  }
}