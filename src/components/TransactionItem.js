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
export default function TransactionItem() {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.containerIcon}>
            <View style={styles.icon}>
            <FontAwesomeIcon size={18} icon={faPlane} />
            </View>
        </View>
      <View style={styles.containerDescription}>
        <Text style={styles.textTitle}>Volaris</Text>
        <Text style={styles.textDate}>13 Novimebre 2021 14:26</Text>
      </View>
      <View style={styles.containerAmount}>
        <Text style={styles.textAmount}>$255.00</Text>
        <Text style={styles.textCashback}>+ $12.50</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    paddingBottom:7,
    paddingTop:7,
    borderBottomColor:"#a0a0a0a0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingRight:6
  },
  containerIcon: {
    flex:3,
    justifyContent:"center",

  },
  containerDescription: {
    flex:8,
    justifyContent:"center",


  },
  containerAmount: {
    flex:3,
    justifyContent:"center",

  },
  icon:{
    alignItems: "center",
    flex:1,
    backgroundColor: "#f0f0f0",
    borderRadius:100,
    margin:7,
    justifyContent:"center",
    height:50,
    width:50
  },
  textTitle: {
    fontSize:14,
    fontWeight: "bold",
  },
  textDate: {
    fontSize:13,
    marginTop:4
  },
  textAmount: {
    fontWeight: "bold",

  },
  textCashback:{
    color: "#000050"
  }

});
