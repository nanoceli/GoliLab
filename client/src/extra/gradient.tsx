import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get("window").height;

export default function Gradiente(){

    return (
        <LinearGradient
        colors={['rgba(254,187,187,0.8)', 'transparent']}
        style={styles.background}
      ></LinearGradient>
    )
}

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: ScreenHeight,
      backgroundColor: '#D6FFE6'
    }
  })