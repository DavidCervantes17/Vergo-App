import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import ActionButton from './ActionButton'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function ActionButtons() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}>
            <ActionButton title={"Send Payment"} icon={faPaperPlane}/>
            <ActionButton title={"Pay Card"} icon={faDollarSign}/>
            <ActionButton title={"Analytics"} icon={faChartPie}/>
            <ActionButton title={"Freeze Card"} icon={faSnowflake}/>
        </ScrollView>
    )
}
