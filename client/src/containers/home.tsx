import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { RootStackParamList } from '../types';
import Main from './main';
import {Header} from '../components/header'

const Stack = createStackNavigator<RootStackParamList>();

export const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={Main} />
    </Stack.Navigator>
  );
}