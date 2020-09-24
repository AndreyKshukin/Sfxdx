import { StyleSheet } from 'react-native';

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
}

const text_shadow = {
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10,
}

export default StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#4369b0',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },

  box_img: {
    width: '100%',
    padding: 30,
  },

  contaner_img: {
    ...shadow,
    position: 'relative',
    width: '100%',
    borderRadius: 10,
  },
  
  img: {
    width: '100%',
    paddingBottom: "100%",
    backgroundColor: '#4369b0',
    borderRadius: 10,
  },

  text_box: {
    width: '100%',
    paddingHorizontal: 30,
    paddingBottom: 30 
  },

  text_box_bg: {
    width: '100%',
    backgroundColor: '#314977',
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },

  text: {
    ...text_shadow,
    color: '#fff',
    fontSize: 18,
    paddingTop: 15
  },

  title_box: {
    paddingTop: 30
  },
  
  title_text: {
    ...text_shadow,
    color: '#fff',
    fontSize: 30,
  }
  
});

