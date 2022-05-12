import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import style from './styles';

const HeaderOptions = ({navigation}) => {
  return (
    <View style={style.View}>
      <TouchableOpacity title="Home">
        <Image
          source={require('../../../assets/home.png')}
          style={style.Button}
        />
        <Text style={style.Text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity title="Shared">
        <Image
          source={require('../../../assets/compartilhar-link.png')}
          style={style.Button}
        />
        <Text style={style.Text}>Compartilhar</Text>
      </TouchableOpacity>
      <TouchableOpacity title="FeedBack">
        <Image
          source={require('../../../assets/positivo-e-negativo.png')}
          style={style.Button}
        />
        <Text style={style.Text}>FeedBack</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderOptions;
