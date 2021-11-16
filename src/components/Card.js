import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import cardNumberFormat from "../utilities/cardNumberFormat";
import numberFormat from "../utilities/numberFormat";
const windowWidth = Dimensions.get("window").width;

export default function Card(props) {
  const {
    accountName = "Debit Card",
    amount = "1000000.79",
    color = "#a0a0a0",
    type = "Balance",
  } = props;

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.card}>
        <View style={styles.containerUp}>
          <Text style={styles.textAccountName}>{accountName}</Text>
          <Text style={styles.textType}>{type}</Text>
          <Text style={styles.textBalance}>{numberFormat(amount)}</Text>
        </View>
        <View style={styles.containerDown}>
          <Image
            style={styles.image}
            source={require("../img/visa-white.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginHorizontal: (windowWidth - 300) / 2,
    width: 300,
    height: 170,
    maxHeight: 170,
    borderRadius: 10,
  },
  card: {
    flex: 1,
  },
  textNumber: {
    color: "#000",
  },
  textAccountName: {
    color: "#000",
    fontWeight:"500"
  },
  textBalance: {
    marginTop: 0,
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
  },
  image: {
    marginTop: 24,
    marginLeft: 12,
    width: 45,
    height: 14,
    alignItems: "flex-end",
  },
  containerUp: {
    flex: 1,
  },
  containerDown: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textType: {
    color: "#000",
    fontSize: 12,
    marginTop: 12,
  },
});
