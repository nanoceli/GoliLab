import * as React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import Gradiente from '../extra/gradient';
import Calendar from './calendar'

export default function Turnos() {
  return (
    <View>
       <Calendar style={styles.container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});