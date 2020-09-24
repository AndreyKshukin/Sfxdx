import { DataState, IAction, CharacterDetailModel } from "@intefaces";
import { CharacterModel } from "@models";
import { CharacterDetailAction, UtilAction } from "../../actions/";

//Инициализация начального состония подробного просмотра персонажа
const initState: CharacterDetailModel = {
  character: undefined,
  state: DataState.initial,
  errorMessage: "",
};

export function CharacterDetailReducer(
  state: CharacterDetailModel = initState,
  action: IAction<any, CharacterModel>
) {
  switch (action.type) {
    case CharacterDetailAction.INITIAL_DETAIL:
      return {
        ...state,
        state: DataState.loaded,
        character:
          state.character !== undefined &&
          action.data !== undefined &&
          state.character!.id == action.data!.id
            ? state.character
            : action.data,
        errorMessage: "",
      };
    case CharacterDetailAction.CHARACTER_FETCH_DETAIL:
      return {
        ...state,
        state: DataState.loading,
        errorMessage: "",
      };

    case CharacterDetailAction.CHARACTER_FETCHED:
      return {
        ...state,
        character: action.data,
        state: DataState.loaded,
        errorMessage: "",
      };

    case UtilAction.ERROR:
      return {
        ...state,
        state: DataState.error,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}
