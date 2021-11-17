import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function RecipientItem(props) {
  const { name = "David Cervantes", clabe = "18327921821983892" } = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.containerIcon}>
        <View style={[styles.icon]}>
          <FontAwesomeIcon size={18} icon={faUser} />
        </View>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.textTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    height: 80,
    flexDirection: "row",

    borderBottomColor: "#a0a0a0a0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
    margin: 12,
  },
  containerIcon: {
    flex: 3,
    justifyContent: "center",
  },
  containerDescription: {
    flex: 8,
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
