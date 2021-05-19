import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Inicio from '../screens/inicio';
import Turnos from '../screens/turnos';
import Estudios from '../screens/turnos';
import Perfil from '../screens/perfil';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

let ScreenHeight = Dimensions.get("window").height;

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: '#FF9D36', activeBackgroundColor: '#D6FFE6'
      }}>

      <BottomTab.Screen
        name="Incio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Turnos"
        component={Turnos}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Estudios"
        component={Estudios}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="document-text-outline" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}



function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(254,187,187,0.8)', 'transparent']}
        style={styles.background}
      />
    </View>
  );
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

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(254,187,187,0.8)', 'transparent']}
        style={styles.background}
      />
    </View>
  );
}
