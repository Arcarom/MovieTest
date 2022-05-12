import React from 'react';
import {
  Text,
  ScrollView,
  StatusBar,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import HeaderOptions from '../../components/HeaderOptions';
import Style from '../Home/style';
import MovieList from '../../components/MovieList';

const HomeApp = ({navigation}) => {
  return (
    <ScrollView style={Style.Background}>
      <StatusBar backgroundColor="rgb(55,25,90)" barStyle="light-content" />
      <View style={Style.View}>
        <TextInput
          style={Style.inputStyle}
          autoCapitalize="none"
          placeholder="Pesquisar Filme"
          placeholderTextColor={'#fff'}
        />
        <Button title="ABC" onPress={() => navigation.navigate('ABC')} />
        <FlatList
          data={[1, 2, 3]}
          renderItem={({item, index}) => <MovieList key={index} />}
        />
      </View>
    </ScrollView>
  );
};

export default HomeApp;
