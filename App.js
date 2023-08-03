import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// 👇 Import our component
import ChatListItem from "./src/components/ChatListItem";
import ChatsScreen from "./src/screens/ChatScreen";
import ChatScreen from './src/screens/ChatScreen';
import Navigator from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import {createUser} from "./src/graphql/mutations"

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

 function App() {

  useEffect(() => {
  const syncUser = async () => {
    //get Auth user
    const authUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    console.log(authUser);

    //query the database using Auth user id (sub)
const userData = await API.graphql(
  graphqlOperation(getUser, {id: authUser.attributes.sub})
);
console.log(userData);
    //if there is no users in db, create one

    if (userData.data.getUser) {
      console.log("User Already exist in Database");
      return;
    }
    // if no user exist
    const newUser = {
      id: authUser.attributes.sub,
      name: authUser.attributes.phone_number,
      status: 'online',
    };
    console.log(newUser);

    const newUserResponse = await API.graphql(
      graphqlOperation(createUser, { input: newUser })
    );
  };

  syncUser();

}, []);


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