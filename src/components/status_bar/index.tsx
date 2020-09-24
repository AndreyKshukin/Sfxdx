import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './style'

export const HeaderStatusBar = () => {
  return (
    <View style={styles.container}> 
      <StatusBar style="light" />
    </View>
  );
}