import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';

const MainStack = createStackNavigator();

const navigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
};

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={navigationOptions}
    >
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={MainScreen.navigationOptions}
      />
      <MainStack.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </MainStack.Navigator>
  );
}

const BookedStack = createStackNavigator();

function BookedStackScreen() {
  return (
    <BookedStack.Navigator
      initialRouteName="Booked"
      screenOptions={navigationOptions}
    >
      <BookedStack.Screen
        name="Main"
        component={MainScreen}
        options={MainScreen.navigationOptions}
      />
      <BookedStack.Screen
        name="Booked"
        component={BookedScreen}
        options={BookedScreen.navigationOptions}
      />
      <BookedStack.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </BookedStack.Navigator>
  );
}

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        shifting={true}
        barStyle={{
          backgroundColor: THEME.MAIN_COLOR,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'ios-albums' : 'ios-albums';
              size = 25;
            } else if (route.name === 'Booked') {
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
        <Tab.Screen
          name="Main"
          component={MainStackScreen}
          options={{
            tabBarLabel: 'Все',
          }}
        />
        <Tab.Screen
          name="Booked"
          component={BookedStackScreen}
          options={{
            tabBarLabel: 'Избранное',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
