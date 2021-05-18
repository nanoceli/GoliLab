import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import Header from './screens/header'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NavigationContainer>
        <Header/>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NavigationContainer>
    );
  }
}
