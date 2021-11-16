import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Card from "./Card";

export default function CardList() {
  const windowWidth = Dimensions.get("window").width;

  const handleScroll = (event) => {
    console.log(event.nativeEvent.contentOffset.x);
  };
  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}
      snapToInterval={windowWidth}
      decelerationRate={"fast"}
      pagingEnabled={true}
    >
      <Card
        color="#7fc4b4"
        amount="109873.98"
        accountName="Debit Card"
        type="Balance"
      />
      <Card
        color="#b6daee"
        amount="64.98"
        accountName="Credit Card"
        type="Used Balance"
      />
      <Card
        color="#fa9984"
        amount="100.98"
        accountName="Joe's Project"
        type="Used Balance"
      />
      <Card
        color="#ff6961"
        amount="500.98"
        accountName="Katy's Project"
        type="Used Balance"
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
  },
});
