import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigation } from './DrawerNavigation';

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
