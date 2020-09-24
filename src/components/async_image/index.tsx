import React, { useState } from "react";
import { View, Image, ImageStyle, ViewStyle, StyleProp} from "react-native";


export const AsyncImage = ({ uri, style }: 
  {
    uri: string,
    style: {
      container: StyleProp<ViewStyle>,
      img: StyleProp<ImageStyle>
    },
}) => {

  const [state, setState] = useState({
    loaded: false,
  });

  const onLoad = () => {
    setState({loaded: true})
  }

  return (
    <View style={style.container}>
      <Image
        source={{uri}}
        resizeMode={'cover'}
        style={ style.img }
        onLoad={onLoad}
      />

      {!state.loaded && (
        <View style={ style.img }/>
      )}
    </View>
  );
};
