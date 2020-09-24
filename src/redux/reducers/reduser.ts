import { combineReducers } from 'redux';

import { AppReducer } from './AppReducer';
import { CharacterDetailReducer } from './character/CharacterDetailReducer';

const rootReducer = combineReducers({
  characterModule: CharacterDetailReducer,
  appModule: AppReducer
});

export default rootReducer;