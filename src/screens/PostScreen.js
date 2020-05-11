import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { THEME } from '../theme';
import { toggleBooked, removePost } from '../store/actions/post';

export const PostScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const postId = route.params.postId;

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destuctive',
          onPress: () => {
            navigation.navigate('Main');
            dispatch(removePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    return null;
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image}></Image>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ route }) => {
  const iconName = route.params.booked ? 'ios-star' : 'ios-star-outline';
  const date = route.params.date;
  const toggleHandler = route.params.toggleHandler;

  return {
    title: 'Пост от ' + new Date(date).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Add to Book" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
});
