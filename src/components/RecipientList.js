import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import RecipientItem from "./RecipientItem";
export default function RecipientList(props) {


  const {recipients} = props;
  return (
    <View>
      {recipients.map((recipient) => {
        return (
          <RecipientItem
            key={recipient.id}
            onPress={()=>props.onPress(recipient)}
            name={recipient.name}
          />
        );
      })}
    </View>
  );
}
