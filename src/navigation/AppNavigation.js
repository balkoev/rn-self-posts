import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const Stack = createStackNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title="Take photo"
                iconName="ios-camera"
                onPress={() => console.log('press')}
              />
              <Item
                title="Take photo 2"
                iconName="ios-reverse-camera"
                onPress={() => console.log('press')}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
