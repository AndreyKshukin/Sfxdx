import { DataState, IAction } from "@intefaces";
import { AppModel, CharactersModel } from "@models";
import { AppAction, UtilAction } from "@actions";

//Инициализация начального состония приложения
const initState: AppModel = {
  characters: [],
  searchTerm: "",
  currentCharacterId: null,
  state: DataState.initial,
  errorMessage: "",
};


export function AppReducer(state: AppModel = initState, action: IAction<any, CharactersModel>): AppModel {
  switch (action.type) {
    case AppAction.GET_CHARACTERS:
      return {
          ...state,
          state: DataState.loading,
          searchTerm: action.payload,
          errorMessage: ""
      }

    case AppAction.CHARACTERS_LOADED:
      return {
          ...state,
          characters: action.data !== null ? action.data!: [],
          state: DataState.loaded,
          errorMessage: ""
      }

   case AppAction.SHOW_CHARACTER_LIST:
      return {
          ...state,
          state: DataState.loaded,
          currentCharacterId: null
      }

     case AppAction.SHOW_CHARACTER_DETAIL:
      return {
          ...state,
          currentCharacterId: action.payload,
          state: DataState.loading,
          errorMessage: ""
      }

    case UtilAction.ERROR:
      return {
          ...state,
          state: DataState.error,
          errorMessage: action.error
      }
      default:
          return state
  }
}


