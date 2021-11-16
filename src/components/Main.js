import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Greeting from "./Greeting";
import Card from "./Card";
import ActionButtons from "./ActionButtons";
import Transactions from "./Transactions";
import CardList from "./CardList";
import { back } from "react-native/Libraries/Animated/Easing";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.containerScrollView}>

      <View style={styles.containerMargin}>
        <Greeting firstName={"David"} />
      </View>
      <View style={styles.cardContainer}>
          <CardList />
        </View>
      <View style={styles.containerScrollViewButtons}>
        <ActionButtons />
      </View>
      <View style={styles.roundBorder}>
        <View style={styles.containerTransactions}>
          <Transactions />
        </View>
      </View>
      <StatusBar style="light" />
    </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  containerMargin: {
    margin: 24,
  },
  containerScrollViewButtons: {
    height: 56,
  },
  containerTransactions: {
    flex: 1,
    alignSelf: "center",
    width: "95%",
    borderRadius: 30,
  },
  roundBorder: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 12,
  },
  cardContainer: {
    alignSelf: "center",
  },
  containerScrollView:{
  }
});
