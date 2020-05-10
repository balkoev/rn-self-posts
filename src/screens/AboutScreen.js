import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>О приложении:</Text>
      <Text>Разработано по видео курсу</Text>
      <Text>
        Версия приложения <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  title: 'О приложении',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toogle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  version: {
    fontFamily: 'open-bold',
  },
});
