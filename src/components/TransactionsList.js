import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TransactionItem from './TransactionItem'

export default function TransactionsList() {
    return (
        <ScrollView style={styles.container}>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
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
