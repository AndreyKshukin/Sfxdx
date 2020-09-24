import React from "react";
import { TextInput } from "react-native";
import { ISearchBar } from "@intefaces";

import styles from "./style";

export const SearchBar = ({searchFunction ,searchTerm}: ISearchBar) => {
  return (
      <TextInput
        placeholder="Enter text"
        placeholderTextColor="#aecdff"
        style={styles.input}
        value={searchTerm}
        onChangeText={searchFunction}
      />
  );
};
