import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = ({ navigation, route }) => {
  const postId = route.params.postId;
  const date = route.params.date;

  navigation.setOptions({
    title: 'Пост от ' + new Date(date).toLocaleDateString(),
  });

  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
