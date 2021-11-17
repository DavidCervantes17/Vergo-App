import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RecipientList from "./RecipientList";
import numberFormat from "../utilities/numberFormat";
let height = Dimensions.get("window").height;

export default function PaymentForm({navigation}) {
  const [recipients, setRecipients] = useState([
    { name: "Daniel Hernandez", id: "1" },
    { name: "Juan Gonzales", id: "2" },
    { name: "David Cervantes", id: "3" },
  ]);

  const scrollViewRef = useRef();
  const [number, setNumber] = useState("");
  const [idRecipient, setIdRecipient] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");


  const next = (page) => {
    scrollViewRef.current?.scrollTo({
      y: height * page,
      animated: true,
    });
  };

  const onChangeNumber = (text) => {
    setNumber(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate={"slow"}
        pagingEnabled={true}
        ref={scrollViewRef}
      >
        <View style={styles.viewContainer}>
          <Text style={styles.textTitle}>1. Select Recipient</Text>
          <RecipientList
            recipients={recipients}
            onPress={(recipient) => {
              next(1);
              console.log("id",id)
              setIdRecipient(recipient.id);
            setSelectedRecipient(recipient.name)
            }}
          />
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textTitle}>2. Amount to send</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType='numeric'

          />
          <TouchableOpacity onPress={() => next(2)} style={styles.button}>
            <Text style={styles.textButton}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.textTitle}>3. Confirmation</Text>
          <View style={styles.confirmation}>
            <Text style={styles.textSubtitle}>Recipient name</Text>
            <Text style={styles.text}>{selectedRecipient}</Text>

            <Text style={styles.textSubtitle}>Amount</Text>
            <Text style={styles.text}>{numberFormat(number)}</Text>
          </View>
          <TouchableOpacity onPress={() => next(3)} style={styles.button}>
            <Text style={styles.textButton}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewContainerGreen}>
          <Text style={[styles.textTitle, {textAlign:"center", justifyContent:"center"}]}>Payment Send Successfully!</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
            <Text style={styles.textButton}>Go back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  viewContainer: {
      padding:24,
    height,
  },
  textTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 24,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 18,
    textAlign: "center",
  },
  button: {
    height: 40,
    margin: 24,
    backgroundColor: "#404040",
    borderRadius: 18,
    textAlign: "center",
    padding: 8,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  confirmation: {
    height: 300,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 18,
    marginTop: 12,
  },
  textSubtitle: {
    marginLeft: 24,
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: "#404040",
  },
  text: {
    marginLeft: 24,
    marginTop: 12,

    fontSize: 16,
    color: "#404040",
  },
  viewContainerGreen:{
      backgroundColor: "#a3d0b5",
      height,
      paddingTop: height/4
    }
});
