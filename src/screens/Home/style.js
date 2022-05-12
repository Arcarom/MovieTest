import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  Background: {
    backgroundColor: 'rgb(60,50,90)',
  },
  inputStyle: {
    color: '#fff',
    marginTop: 20,
    margin: 10,
    fontSize: 18,
    borderColor: 'rgb(60,50,90)',
    borderWidth: 1,
  },
  View: {
    borderRadius: 10,
  },
  ViewButton: {
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
    margin: 20,
  },
  Text: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Style;
