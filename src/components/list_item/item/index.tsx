import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { AsyncImage } from './../../async_image';
import { ItemListModel } from '@models';

import styles from './style'


export const NoteTeaser = ({note, onItemPress} : {note: ItemListModel, onItemPress: (id: string) => void}) => {
  const {img_url: uri, name} = note;

  const onClick = () => {
    onItemPress(note.id);
  }
  
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container} >
        <AsyncImage 
          uri={uri} 
          style={{
            container: styles.contaner_img,
            img: styles.img}}/>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}