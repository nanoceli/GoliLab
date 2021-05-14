import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import useColorScheme from './hooks/useColorScheme';
import Main from './navigation/Main'

export default function App() {
  const colorScheme = useColorScheme();
    return (
      <NavigationContainer>
        <Main colorScheme={colorScheme} />
      </NavigationContainer>
    )
}
