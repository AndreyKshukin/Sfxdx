import { takeEvery } from "redux-saga/effects";

import { AppAction, CharacterDetailAction } from "../actions";
import { searchCharacters } from "./AppSaga";
import { findCharacterById } from "./character/CharacterSaga";

export default function* () {
  yield takeEvery(AppAction.GET_CHARACTERS, searchCharacters)
  yield takeEvery(CharacterDetailAction.CHARACTER_FETCH_DETAIL, findCharacterById)
}