import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { screenDefaultOptions } from './navigationOptions/navigationOptions';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={screenDefaultOptions}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={MainScreen.navigationOptions}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </Stack.Navigator>
  );
};
