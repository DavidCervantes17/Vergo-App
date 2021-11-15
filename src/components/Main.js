import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Greeting from './Greeting'
import Card from './Card'
import ActionButtons from './ActionButtons'
import Transactions from './Transactions'
import { back } from 'react-native/Libraries/Animated/Easing';

export default function Main() {
    return (
      <SafeAreaView style={styles.container}>
          
        <View style={styles.containerMargin}>
        <Greeting firstName={"David"}/>
        <Card/>
        </View>
        <View style={styles.containerScrollView}>
          <ActionButtons/>
        </View>
        <View style={styles.roundBorder}>
        <View style={styles.containerTransactions}>
        <Transactions/>
        </View>
        </View>

        {/*Recent transactions and payments*/}
        
      
  
        {/*<Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />*/}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202020',
    },
    containerMargin: {
      margin:24,
      marginBottom:0
    },
    containerScrollView:{
      height:56,
      marginBottom:12
    },
    containerTransactions:{
        flex: 1,
        alignSelf:"center",
        width:"95%",
        borderRadius:30,
    },
    roundBorder:{
        flex: 1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:10,
        backgroundColor: '#fff'
    }
  });