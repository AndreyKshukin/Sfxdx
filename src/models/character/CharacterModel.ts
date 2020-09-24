import { ItemListModel } from "./ItemListModel";

export declare type CharactersModel = CharacterModel[];
export declare type UCharacterModel = CharacterModel | undefined

export interface CharacterModel extends ItemListModel {
  gender: string,
  culture: string,
  description?: string,
}