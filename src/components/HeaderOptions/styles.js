import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  View: {
    backgroundColor: 'rgb(60,20,90)',
    width: 'auto',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
  },
  Button: {
    width: 70,
    height: 70,
  },
  Text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default style;
