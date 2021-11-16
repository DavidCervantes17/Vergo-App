import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import PaymentForm from './PaymentForm';
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}
        options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <FontAwesomeIcon size={26} icon={faHome} color={color} />
            ),
            headerShown: false,
        tabBarShowLabel: false,
          }} />
        <Stack.Screen name="Payment" component={PaymentForm}
        
        options={{
            headerShown: true,
            tabBarShowLabel: true,
          }}
        />

      </Stack.Navigator>
  );
}