import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// 👇 Import our component
import ChatListItem from "./src/components/ChatListItem";
import ChatsScreen from "./src/screens/ChatScreen";
import ChatScreen from './src/screens/ChatScreen';
import Navigator from "./src/navigation";

const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Lukas",
  },
  lastMessage: {
    text: "Oke",
    createdAt: "07:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* 👇 Render a ChatListItem */}
      {/* <ChatsScreen/> */}
      <Navigator/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
   
  },
});