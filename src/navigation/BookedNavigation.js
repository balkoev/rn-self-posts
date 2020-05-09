import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { screenDefaultOptions } from './navigationOptions/navigationOptions';

const BookedNavigator = createStackNavigator();

export const BookedNavigation = () => {
  return (
    <BookedNavigator.Navigator screenOptions={screenDefaultOptions}>
      <BookedNavigator.Screen
        name="Booked"
        component={BookedScreen}
        options={BookedScreen.navigationOptions}
      />
      <BookedNavigator.Screen
        name="Post"
        component={PostScreen}
        options={PostScreen.navigationOptions}
      />
    </BookedNavigator.Navigator>
  );
};
