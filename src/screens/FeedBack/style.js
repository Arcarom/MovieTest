import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  screenmessage: {
    flex: 1,
    backgroundColor: 'rgb(60,50,90)',
  },
  messageBox: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgb(55,25,90)',
    borderRadius: 100,
    color: '#fff',
  },
  boxButton: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 70,
  },
  barMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  screenMessage: {
    width: '100%',
    flex: 1,
  },
});

export default Styles;
