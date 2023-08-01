import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import React, { useState } from "react"; // Import useState from "react"

const InputBox = () => {
  const [newMessage, setNewMessage] = useState(''); // Use useState from "react"

  const onSend = () => {
    console.warn("Send a new message: ", newMessage);
    setNewMessage({ newMessage });
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} />
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "whitesmoke",
      padding: 5,
      alignItems: "center",
    },
    input: {
      fontSize: 18,
  
      flex: 1,
      backgroundColor: "white",
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
  
      borderRadius: 50,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgray",
    },
    send: {
      backgroundColor: "royalblue",
      padding: 7,
      borderRadius: 15,
      overflow: "hidden",
    },
  });
export default InputBox;