import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlockHome1 from "../screens/Home/BlockHome1";
import BlockHome2 from "../screens/Home/BlockHome2";
import BlockHome3 from "../screens/Home/BlockHome3";
import ChatDetail from "../screens/ChatDetail";
import Chat from "../screens/Chat";
import Login from "../screens/Welcome/Login";
import Signup from "../screens/Welcome/Signup";
import Welcome1 from "../screens/Welcome/Welcome1";
import Welcome2 from "../screens/Welcome/Welcome2";
import Welcome3 from "../screens/Welcome/Welcome3";
import EditProfile from "../screens/Welcome/EditProfile";
import EditPreview from "../screens/Welcome/EditPreview";
import SetLocation from "../screens/Welcome/SetLocation";
import SignupProcess from "../screens/Welcome/SignupProcess";
import PaymentMethod from "../screens/Welcome/PaymentMethod";
import SigupSuccess from "../screens/Welcome/SigupSuccess";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Welcome1" component={Welcome1} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="Welcome3" component={Welcome3} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} /> */}
      <Stack.Screen name="SignupProcess" component={SignupProcess} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditPreview" component={EditPreview} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="SigupSuccess" component={SigupSuccess} />
      <Stack.Screen name="Home" component={BlockHome1} />
      <Stack.Screen name="AllRestaurants" component={BlockHome2} />
      <Stack.Screen name="OptionFilter" component={BlockHome3} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
    </Stack.Navigator>
  );
};

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Welcome1" component={Welcome1} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="Welcome3" component={Welcome3} /> */}
      {/* <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} /> */}
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditPreview" component={EditPreview} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
    </Stack.Navigator>
  );
};

export { HomeStack, ChatStack, ProfileStack };
