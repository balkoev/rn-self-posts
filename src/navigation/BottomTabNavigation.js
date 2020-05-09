import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import { PostNavigation } from '../navigation/PostNavigation';
import { BookedNavigation } from '../navigation/BookedNavigation';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomNavigator.Navigator
      shifting={true}
      barStyle={{
        backgroundColor: THEME.MAIN_COLOR,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PostNavigation') {
            iconName = focused ? 'ios-albums' : 'ios-albums';
            size = 25;
          } else if (route.name === 'BookedNavigation') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
            size = 25;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: THEME.MAIN_COLOR,
        inactiveTintColor: 'gray',
      }}
    >
      <BottomNavigator.Screen
        name="PostNavigation"
        component={PostNavigation}
        options={{
          tabBarLabel: 'Все',
        }}
      />
      <BottomNavigator.Screen
        name="BookedNavigation"
        component={BookedNavigation}
        options={{
          tabBarLabel: 'Избранное',
        }}
      />
    </BottomNavigator.Navigator>
  );
};
