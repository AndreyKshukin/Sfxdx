import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#aecdff',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 18,
    color: '#fff',
  },

  contaner_img: {
    height: 60,
    width: 60,
    margin: 10
  },
  
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 0.7,
    backgroundColor: '#4369b0',
    borderColor: '#aecdff',
    position: 'absolute',
  }
});