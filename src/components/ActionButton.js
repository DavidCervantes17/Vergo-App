import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function ActionButton(props) {
  const { title = "Send", icon = faPaperPlane } = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.icon}>
        <View>
          <FontAwesomeIcon size={26} icon={icon} />
        </View>
      </View>
      <View style={styles.text}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 116,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 24,
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    alignSelf: "center",
    flex: 2,
  },
  text: {
    alignItems: "center",
    alignSelf: "center",
    flex: 3,
    marginRight: 8,
    fontWeight: "bold",
  },
});
