import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import { ItemListModel } from '@models';
import { NoteTeaser } from './item';

export const ListNote = (
  {items, onItemPress }: 
  {items: Array<ItemListModel>, 
    onItemPress: (id: string) => void }) => {
      
  return(
    <View style={styles.container}>
      <FlatList 
        keyExtractor={item => item.id}
        data={items}
        renderItem = {({item}) => 
          <NoteTeaser note={item} key={item.id} onItemPress={onItemPress}/>
        }        
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});