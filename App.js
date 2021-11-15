import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Greeting from "./src/components/Greeting";
import Card from "./src/components/Card";
import ActionButtons from "./src/components/ActionButtons";
import Main from "./src/components/Main";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Transactions from "./src/components/Transactions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./src/components/Settings";
import Referrals from "./src/components/Referrals";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            title: "Home",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: () => <FontAwesomeIcon size={26} icon={faHome} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Referrals",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: () => <FontAwesomeIcon size={26} icon={faCog} />,
          }}
        />
        <Tab.Screen
          name="Referrals"
          component={Referrals}
          options={{
            title: "Referrals",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: () => (
              <FontAwesomeIcon size={26} icon={faUserFriends} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
