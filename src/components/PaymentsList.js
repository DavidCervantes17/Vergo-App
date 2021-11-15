import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PaymentItem from './PaymentItem'

export default function PaymentList() {
    return (
        <ScrollView style={styles.container}>
            <PaymentItem/>
            <PaymentItem/>
            <PaymentItem/>
            <PaymentItem/>
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
