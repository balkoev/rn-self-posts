import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabNavigator } from './BottomTabNavigation';
import { AboutNavigation } from './AboutNavigation';
import { CreateNavigation } from './CreateNavigation';
import { screenDefaultOptions } from './navigationOptions/navigationOptions';

const DrawerNavigator = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <DrawerNavigator.Navigator screenOptions={screenDefaultOptions}>
      <DrawerNavigator.Screen
        name="BottomNavigator"
        component={BottomTabNavigator}
        options={{ title: 'Главная' }}
      />

      <DrawerNavigator.Screen
        name="AboutScreen"
        component={AboutNavigation}
        options={{ title: 'О приложении' }}
      />
      <DrawerNavigator.Screen
        name="CreateScreen"
        component={CreateNavigation}
        options={{ title: 'Новый пост' }}
      />
    </DrawerNavigator.Navigator>
  );
};
