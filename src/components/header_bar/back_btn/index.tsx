import React from "react";
import { Text } from "react-native";

import styles from "./style";

export const BackButton = ({backFunction }: {backFunction: () => any}) => {
  return (
      <Text style={styles.container} onPress={backFunction}>Back</Text>
  );
};
