import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsList from './TransactionsList'
import PaymentsList from './PaymentsList'

const Tab = createMaterialTopTabNavigator();

export default function Transactions() {
    return (
     <Tab.Navigator
     screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#fff' },
      tabBarActiveTintColor: "#000",
      tabBarInactiveTintColor:"#000",
      tabBarActiveTintColor:{
        backgroundColor: '#000'
      }

    }}>
      <Tab.Screen 
       name="My Transactions" component={TransactionsList} />
      <Tab.Screen name="My Payments" component={PaymentsList} />
    </Tab.Navigator>
    )
}
