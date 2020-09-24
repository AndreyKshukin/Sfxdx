import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import { CharacterDetailAction } from '@actions';
import { AppStoreModel, CharacterModel } from '@models';
import { AsyncImage } from '../async_image';

import styles from './style'





export const CharacterDetail = ({character}: {character: CharacterModel}) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharacterDetailAction.fetchDetail(character.id))
  }, [])
  
  const deatailState = useSelector((state: AppStoreModel) => { return state.characterModule });
  const char = deatailState.character!;

  //Потом можно прописать логику загрузки
  if (!char) {
    return(<></>)
  }

  return (
    <View style={styles.container}> 
      <View style={styles.title_box}>
        <Text style={styles.title_text}>{char.name}</Text>
      </View>
      <View style={styles.box_img}>
        <AsyncImage 
            uri={character.img_url} 
            style={{
              container: styles.contaner_img,
              img: styles.img}}/>
      </View>
      
      <View style={styles.text_box}>
        <View style={styles.text_box_bg}>
          
          <Text style={styles.text}>Gendnder: {char.gender}</Text>
          <Text style={styles.text}>Culture: {char.culture}</Text>
          <Text style={styles.text}>Description: {char.description}</Text>
          
        </View>
      </View>
    </View>
  );
}