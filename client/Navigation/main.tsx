import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import Inicio from '../Screens/inicio'
import Turnos from '../Screens/turnos'
import Perfil from '../Screens/perfil'
import Estudios from '../Screens/estudio'

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function Main() {
  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: '#FF9D36', activeBackgroundColor: '#D6FFE6'
      }}>

<BottomTab.Screen
        name="Inicio"
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