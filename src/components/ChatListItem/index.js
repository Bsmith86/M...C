import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from '@react-navigation/native';

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();
  console.log(chat);
  return (
    <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })} style={styles.container}>
      {/* User Avatar */}
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />

      {/* Content Container */}
      <View style={styles.content}>
        {/* Row */}
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: "lightGray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
  },
  subTitle: {
    color: "grey",
  },
});

export default ChatListItem;
