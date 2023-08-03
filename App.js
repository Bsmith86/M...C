import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// 👇 Import our component
import ChatListItem from "./src/components/ChatListItem";
import ChatsScreen from "./src/screens/ChatScreen";
import ChatScreen from './src/screens/ChatScreen';
import Navigator from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

 function App() {
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

export default withAuthenticator(App);