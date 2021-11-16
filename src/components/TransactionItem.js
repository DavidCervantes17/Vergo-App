import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
export default function TransactionItem(props) {
  const {
    icon = faPlane,
    title = "Volaris",
    date = "13 Novimebre 2021 14:26",
    amount = "$255.00",
    cashback = "+ $12.50",
    backgroundColor = "#f0f0f0",
  } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerIcon}>
        <View style={[styles.icon, { backgroundColor }]}>
          <FontAwesomeIcon size={18} icon={icon} />
        </View>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      <View style={styles.containerAmount}>
        <Text style={styles.textAmount}>{amount}</Text>
        <Text style={styles.textCashback}>{cashback}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    paddingBottom: 7,
    paddingTop: 7,
    borderBottomColor: "#a0a0a0a0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingRight: 6,
  },
  containerIcon: {
    flex: 3,
    justifyContent: "center",
  },
  containerDescription: {
    flex: 8,
    justifyContent: "center",
  },
  containerAmount: {
    flex: 3,
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    flex: 1,
    borderRadius: 100,
    margin: 7,
    justifyContent: "center",
    height: 50,
    width: 50,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 13,
    marginTop: 4,
  },
  textAmount: {
    fontWeight: "bold",
  },
  textCashback: {
    color: "#0000c0",
  },
});
