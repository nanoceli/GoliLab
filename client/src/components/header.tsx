import * as React from 'react';
import { StyleSheet, Image, SafeAreaView, Text, View } from 'react-native'

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Goli Lab</Text>
            <Text style={styles.subTitle}>Laboratorio de Diagnostico Molecular</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        display:'flex',
        flexDirection: 'column',
        paddingTop:20,
        alignContent: "center",
        justifyContent: 'center',
        marginLeft: '26rem',
        background: 'linear-gradient(#e66465, #9198e5)'
    },
    title: {
        fontSize:25,
        color:'lightBlue',
        fontWeight:'400',
        fontFamily:'fantasy'
    },
    subTitle: {
        fontSize:10,
        color:'lightBlue',
        fontFamily:'fantasy'
    },
})