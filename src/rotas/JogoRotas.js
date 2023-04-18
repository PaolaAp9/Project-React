import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import JogoDescricao from "../telas/JogoDescricao";
import Home from "../telas/Home";

const Stack = createNativeStackNavigator();

export default function JogoRotas() {
  return (
      <Stack.Navigator screenOptions={ { headerShown: false} }> 
          <Stack.Screen name="Bem-Vindo" component={Home} />
          <Stack.Screen name="JogoDescricao" component={JogoDescricao} />
      </Stack.Navigator>
  
 );
}
