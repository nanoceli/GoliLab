import * as React from 'react';
import { StyleSheet, Image, SafeAreaView, Text, View } from 'react-native'

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                GOLI LAB
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        paddingTop:20,
        alignContent: "center",
        justifyContent: 'center',
        backgroundColor: '#747474'
    },
    title: {
        fontSize:25,
        color:'#D6FFE6'
    }
})