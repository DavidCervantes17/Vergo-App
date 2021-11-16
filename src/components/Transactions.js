import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsList from "./TransactionsList";
import PaymentsList from "./PaymentsList";

const Tab = createMaterialTopTabNavigator();
let height = Dimensions.get('window').height

export default function Transactions() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#fff" },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#000",
          tabBarActiveTintColor: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tab.Screen name="Last Transactions" component={TransactionsList} />
        <Tab.Screen name="Last Payments" component={PaymentsList} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height-130,
  },
});
