import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TransactionItem from './TransactionItem'
import { faPlane, faWrench, faHamburger, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export default function TransactionsList() {
    return (
        <ScrollView style={styles.container}>
            <TransactionItem backgroundColor="#7fc4b4" icon = {faPlane }title= "ADO" date= "November 14  2021 14:26" amount="$255.00" cashback="+ $12.50"/>
            <TransactionItem backgroundColor="#ff9688" icon = {faWrench }title= "Home Depot" date= "November 13  2021 14:26" amount="$255.00" cashback="+ $12.50"/>
            <TransactionItem backgroundColor="#ff6961" icon = {faHamburger }title= "McDonald's" date= "November 12  2021 14:26" amount="$255.00" cashback="+ $12.50"/>
            <TransactionItem backgroundColor="#77dd77" icon = {faMoneyBill }title= "Cash Withdrawal" date= "November 11  2021 14:26" amount="$255.00" cashback="+ $12.50"/>
            <TransactionItem/>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flex: 1,
    },
  });
