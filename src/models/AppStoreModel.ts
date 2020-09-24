import { AppModel } from "./AppModel";
import { CharacterDetailModel } from "./character/CharacterDetailModel";


export interface AppStoreModel {
  characterModule: CharacterDetailModel,
  appModule: AppModel
};