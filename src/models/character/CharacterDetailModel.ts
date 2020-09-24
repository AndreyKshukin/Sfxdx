import { CharacterModel } from "@models";
import { IAppState } from "../../intefaces/IAppState";

export interface CharacterDetailModel extends IAppState {
  character?: CharacterModel
}