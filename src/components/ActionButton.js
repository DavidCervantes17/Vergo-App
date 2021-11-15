import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function ActionButton() {
    return (
        <TouchableOpacity style={styles.container}>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      height:48,
      width:116,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
      marginLeft:24
    },
  });
  