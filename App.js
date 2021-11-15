import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Greeting from './src/components/Greeting'
import Card from './src/components/Card'
import ActionButtons from './src/components/ActionButtons'
import Main from './src/components/Main'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Transactions from './src/components/Transactions'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './src/components/Settings'
import Referrals from './src/components/Referrals'
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} options={{
          title: 'Vergo',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Referrals" component={Referrals} />


    </Tab.Navigator>
    <StatusBar style="dark" />

  </NavigationContainer>


  );
}


