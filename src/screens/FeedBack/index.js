import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Styles from './style';
import HeaderOptions from '../../components/HeaderOptions/';

const Feedback = ({navigation}) => {
  return (
    <View style={Styles.screenmessage}>
      <StatusBar backgroundColor="rgb(55,25,90)" barStyle="light-content" />
      <View style={Styles.screenMessage}>
        <Text style={{color: '#fff'}}>1</Text>
      </View>
      <View style={Styles.barMessage}>
        <TouchableOpacity style={Styles.boxButton}>
          <Image
            source={require('../../../assets/notes.png')}
            style={Styles.boxButton}
          />
        </TouchableOpacity>
        <TextInput
          style={Styles.messageBox}
          autoCapitalize="none"
          placeholder="Mensagem"
          placeholderTextColor={'#fff'}
        />
        <TouchableOpacity style={Styles.boxButton}>
          <Image
            source={require('../../../assets/send-mail.png')}
            style={Styles.boxButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feedback;
