import { put } from "redux-saga/effects"

import { IAction } from "@intefaces"
import { CharacterService } from "@services"
import { CharacterDetailAction, UtilAction } from "../../actions"


//Обработка данных для получения подробной иформации
export function* findCharacterById(action: IAction<string, any>) {
  try {
    const data = yield CharacterService.fetchById(action.payload!);
    //В запросе не было дополнительных полей, решил добавить свой для примера
    data.description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    yield put({ type: CharacterDetailAction.CHARACTER_FETCHED, data: data })
  } catch (e) {
    yield put({ type: UtilAction.ERROR, error: "Cannot process data" })
  }
}