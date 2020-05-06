import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { DATA } from '../data';
import { Post } from '../components/Post';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

MainScreen.navigationOptions = {
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
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toogle Drawer"
        iconName="ios-menu"
        onPress={() => console.log('press')}
      />
    </HeaderButtons>
  ),
};
