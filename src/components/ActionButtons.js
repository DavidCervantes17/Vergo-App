import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import ActionButton from './ActionButton'

export default function ActionButtons() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}>
            <ActionButton/>
            <ActionButton/>
            <ActionButton/>
            <ActionButton/>
            <ActionButton/>
        </ScrollView>
    )
}
