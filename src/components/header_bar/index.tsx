import { IHeaderBar } from '@intefaces';
import React from 'react';
import { View } from 'react-native';
import { BackButton } from './back_btn';
import { SearchBar } from './search';

import styles from './style'

export const HeaderBar = ({search, backFunction}: IHeaderBar) => {
  return (
    <View style={styles.container}> 
      { search && SearchBar(search) }
      { backFunction && BackButton({backFunction})}
    </View>
  );
}