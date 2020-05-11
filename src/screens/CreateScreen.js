import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { addPost } from '../store/actions/post';
import { THEME } from '../theme';
import { PhotoPicker } from '../components/PhotoPicker';

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [postText, setPostText] = useState('');
  const [img, setImg] = useState(null);

  const onChangeText = (text) => {
    setPostText(text);
  };

  const saveHandler = () => {
    const post = {
      img,
      text: postText,
      date: new Date().toJSON(),
      booked: false,
    };
    dispatch(addPost(post));
    setPostText('');
    navigation.navigate('Main');
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Введите текст заметки"
            value={postText}
            onChangeText={(text) => onChangeText(text)}
            multiline
          />
          <PhotoPicker onPick={setImg} />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={() => saveHandler()}
            disabled={!postText || !img}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  title: 'Новый пост',
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
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
});
