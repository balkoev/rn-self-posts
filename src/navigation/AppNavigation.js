import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
      }}
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

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'ios-albums' : 'ios-albums';
            } else if (route.name === 'Booked') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: THEME.MAIN_COLOR,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Main" component={MainStackScreen} />
        <Tab.Screen name="Booked" component={BookedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
