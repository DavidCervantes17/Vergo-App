import { StatusBar } from "expo-status-bar";
import React from "react";
import MainNavigator from "./src/components/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Account from "./src/components/Account";
import Project from "./src/components/Project";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./src/components/Settings";
import Stats from "./src/components/Stats";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserFriends,
  faCreditCard,
  faCog,
  faHome,
  faChartPie,
  faThLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  const MyTheme = {
    dark: false,
    colors: {
      primary: "rgb(0, 0, 0)",
      card: "rgb(255, 255, 255)",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <FontAwesomeIcon size={26} icon={faHome} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",

            tabBarIcon: ({ focused, color }) => (
              <FontAwesomeIcon size={26} icon={faCreditCard} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            title: "Stats",

            tabBarIcon: ({ focused, color }) => (
              <FontAwesomeIcon size={26} icon={faChartPie} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Project"
          component={Project}
          options={{
            title: "Project",

            tabBarIcon: ({ focused, color }) => (
              <FontAwesomeIcon size={26} icon={faThLarge} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            title: "Account",
            tabBarIcon: ({ focused, color }) => (
              <FontAwesomeIcon size={26} icon={faUser} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
