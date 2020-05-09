import React from 'react';
import { DATA } from '../data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={DATA} onOpen={openPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Мой блог',
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
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
