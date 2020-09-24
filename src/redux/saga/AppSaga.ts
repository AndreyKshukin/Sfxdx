import { put } from "redux-saga/effects";

import { IAction } from "@intefaces";

import { AppAction, UtilAction } from "../actions";
import { CharacterService } from "@services";
import { CharacterModel } from "@models";
import { routes } from "@services";

//обработка данных для searchData и getAll (смотри CharacterService)
export function* searchCharacters(action: IAction<string, any>) {
  try {
    if (action.payload !== undefined && action.payload!.length > 0) {
      const data = yield CharacterService.searchData(action.payload!);
      const data_filter = dataFilter(data, action.payload);
      yield put({ type: AppAction.CHARACTERS_LOADED, data: data_filter });
    } else {
      const data: Array<CharacterModel> = yield CharacterService.getAll();
      const data_filter = dataFilter(data);
      yield put({ type: AppAction.CHARACTERS_LOADED, data: data_filter });
    }
  } catch (e) {
    yield put({ type: UtilAction.ERROR, error: "Cannot load deals" });
  }
}

//Убираем из списка персонажей без имени 
const dataFilter = (data: Array<CharacterModel>, text?: string): Array<CharacterModel> => {
  
  //В полях не было id.
  data.forEach((character, i) => {
    character.id = (i + 1).toString();
    character.img_url = routes.img + i;
  });

  let filetr_data;
  //Так как не было отдельного запроса на поиск фильтрем список из запроса getAll
  if (text) {
    const low_text = text.toLowerCase()
    filetr_data = data.filter((el) => {
      const name = el.name.toLowerCase();
      const isName = name.includes(low_text);
      return el.culture && el.gender && isName;
    });

  } else {
    filetr_data = data.filter((el) => el.culture && el.gender && el.name);
  }

  return filetr_data;
};
