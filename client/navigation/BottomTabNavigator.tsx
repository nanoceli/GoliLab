import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

let ScreenHeight = Dimensions.get("window").height;

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: '#FF9D36', activeBackgroundColor: '#D6FFE6'
      }}>

      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
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

// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator >
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two Title', headerStyle: {
//             backgroundColor: '#f4511e',
//           }
//         }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }
