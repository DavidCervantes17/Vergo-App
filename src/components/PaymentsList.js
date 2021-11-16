import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PaymentItem from './PaymentItem'
import { faPlane, faWrench, faHamburger, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export default function PaymentListView() {
    return (
        <ScrollView style={styles.container}>
            <PaymentItem backgroundColor="#84b6f4" icon = {faPlane }title= "ADO" date= "13 Novimebre 2021 14:26" amount="$255.00" cashback="+ $12.50"/>
            <PaymentItem backgroundColor="#ff9688" icon = {faWrench }title= "Home Depot" date= "8 Novimebre 2021 12:26" amount="$255.00" cashback="+ $12.50"/>
            <PaymentItem backgroundColor="#ff6961" icon = {faHamburger }title= "McDonald's" date= "7 Novimebre 2021 12:26" amount="$255.00" cashback="+ $12.50"/>
            <PaymentItem backgroundColor="#77dd77" icon = {faMoneyBill }title= "Cash Withdrawal" date= "6 Novimebre 2021 12:26" amount="$255.00" cashback="+ $12.50"/>
            <PaymentItem/>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex: 1,
    },
  });

