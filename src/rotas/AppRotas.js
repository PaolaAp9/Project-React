import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';

import JogoRotas from './JogoRotas';
import MelhoresJogos from '../telas/MelhoresJogos';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
 
export default function AppRotas (){
    return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'game-controller-outline'
                : 'game-controller-outline';
            } else if (route.name === 'MelhoresJogos') {
              iconName = focused ? 'ellipsis-horizontal-outline' : 'ellipsis-horizontal-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}  />;
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={JogoRotas} />
        <Tab.Screen name="MelhoresJogos" component={MelhoresJogos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
