import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeApp from '../screens/Home';
import FeedBack from '../screens/FeedBack';

function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeApp"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: 'rgb(55,25,90)',
            borderRadius: 100,
            position: 'absolute',
            marginTop: 25,
            elevation: 0,
            left: 20,
            right: 20,
            height: 50,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeApp}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/home.png')}
                style={Style.Button1}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FeedBack"
          component={FeedBack}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../../assets/positivo-e-negativo.png')}
                style={Style.Button2}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Style = StyleSheet.create({
  Button1: {
    width: 40,
    height: 40,
  },
  Button2: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default Routes;
