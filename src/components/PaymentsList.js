import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PaymentItem from './PaymentItem'
import { faPlane, faWrench, faHamburger, faMoneyBill, faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function PaymentListView() {
    return (
        <ScrollView style={styles.container}>
            <PaymentItem backgroundColor="#7fc4b4" icon = {faDollarSign }title= "Card Payment" date= "November 14  2021 14:26" amount="-$255.00" cashback="0.0"/>
            <PaymentItem backgroundColor="#77dd77" icon = {faDollarSign }title= "Card Payment" date= "November 13  2021 14:26" amount="-$7.00" cashback="0.0"/>
            <PaymentItem backgroundColor="#ff6961" icon = {faDollarSign }title= "Card Payment" date= "November 12  2021 14:26" amount="-$325.00" cashback="0.0"/>
            <PaymentItem backgroundColor="#7fc4b4" icon = {faDollarSign }title= "Card Payment" date= "November 11  2021 14:26" amount="-$105.00" cashback="0.0"/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex: 1,
    },
  });

