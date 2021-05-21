import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Screens/header'
import Footer from './Screens/footer'
import { NavigationContainer } from "@react-navigation/native";
import Main from './Navigation/index'

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
