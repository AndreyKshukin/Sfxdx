import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction } from '@actions';
import { HeaderBar, HeaderStatusBar, CharacterDetail, ListNote } from '@components';
import { AppStoreModel, UCharacterModel } from '@models';


export const App = () => {

  const appState = useSelector((state: AppStoreModel) => { return state.appModule });
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(AppAction.getCharacters(''));
  }, [])

  const SerchCharacter = (searchTerm?: string | '') => {
    dispatch(AppAction.getCharacters(searchTerm));
  }

  const setCurrentCharacter = (id: string) => {
    dispatch(AppAction.setCurrentCharacters(id));
  }

  const unsetCurrentCharacter = () => {
    dispatch(AppAction.unsetCurrentCharacter());
  }

  const currentCharacter = (): UCharacterModel => {
    return appState.characters.find(x => x.id === appState.currentCharacterId)
  }

  return (
      <View style={styles.container}>
        <HeaderStatusBar />
        
        { appState.currentCharacterId ? 
          <>
            <HeaderBar backFunction={unsetCurrentCharacter}/>
            <CharacterDetail character={currentCharacter()!}/> 
          </>: 
          <>
            <HeaderBar search={{searchFunction: SerchCharacter, searchTerm: appState.searchTerm}}/>
            <ListNote items={appState.characters} onItemPress={setCurrentCharacter}/>
          </>
        }
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#314977',
  },
});
