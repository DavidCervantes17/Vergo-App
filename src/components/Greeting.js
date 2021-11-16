import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Greeting(props) {
    const {firstName = "Einar"} = props;

    const greeting = (hours = new Date().getHours()) => {
        //Morning
        if(hours >= 5 && hours < 12){
            return "Good Morning"
        }
        //Afternoon
        if(hours >= 12 && hours < 18){
            return "Good Afternoon"
        }
        //Evening
        if(hours >= 18 && hours < 20){
            return "Good Evening"
        }
        //Night
        if((hours >= 20 && hours <= 23) || (hours >= 0 && hours <= 4)){
            return "Good Evening"
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {`${greeting()}, ${firstName}!`}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop:12
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color:"#fff"
    }
  });
