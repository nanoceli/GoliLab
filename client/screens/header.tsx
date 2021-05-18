import * as React from 'react';
import { StyleSheet, Image, SafeAreaView, Text, View } from 'react-native'



const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Goli Lab
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
        backgroundColor: '#7EF9D3'
    },
    title: {
        fontSize:25
    }
})

export default Header;