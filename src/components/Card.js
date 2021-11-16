import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import cardNumberFormat from '../utilities/cardNumberFormat'
import numberFormat from '../utilities/numberFormat'

export default function Card(props) {
    const {firstName = "Einar", lastName = "Hohenstein", cardNumber ="1111222233334444", accountName="Debit Card", balance="1000000.79"} = props;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.containerUp}>
                    <Text  style={styles.textAccountName}>
                        {accountName}
                    </Text>
                    <Text  style={styles.textBalance}>
                        {numberFormat(balance)}
                    </Text>
                </View>
                <View style={styles.containerDown}>
                    <Image style={styles.image} source={require('../img/visa-white.png')}/>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding:24,
        margin: 24,
        width: 300,
        height:170,
        maxHeight: 170,
        backgroundColor: '#a0a0a0',
        borderRadius: 10
    },
    card: {
        flex:1
    },
    textNumber:{
        color: '#000',
    },
    textAccountName:{
        color: '#000',
    },
    textBalance:{
        marginTop:12,
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
    },
    image:{
        marginTop:24,
        marginLeft:12,
        width:45,
        height:14,
        alignItems: 'flex-end'

    },
    containerUp:{
        flex:1,
    },
    containerDown:{
        flex:1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row', justifyContent: 'flex-end',
    }

    
  });