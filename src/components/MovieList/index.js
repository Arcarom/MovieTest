import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Style from './style';

const MovieList = () => {
  return (
    <TouchableOpacity>
      <View style={Style.colunFilme}>
        <Image
          source={{uri: 'https://cdn.wallpapersafari.com/86/29/kZs36U.jpg'}}
          style={Style.imageStyle}
        />
        <View style={Style.TextColumn}>
          <Text style={{color: '#fff'}}> Text Name: Salem</Text>
          <Text style={{color: '#fff'}}>
            {' '}
            Text Discription: A população de uma cidade paralisada pelo medo
            empenha-se em livrar-se do mal, a qualquer custo. A sombria e
            espantosa verdade atrás dos abomináveis julgamentos das bruxas de
            Salém no século 17.{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieList;
