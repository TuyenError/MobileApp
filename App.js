import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/tabs";
import DetailProduct from "./screens/DetailProduct";
import DetailRestaurant from "./screens/DetailRestaurant";
import { HomeStack, ProfileStack } from "./navigation/StackNavigation";
import SetLocation from "./screens/Welcome/SetLocation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <EditProfile /> */}
      {/* <EditPreview /> */}
      {/* <SigupSuccess /> */}
      {/* <CallRinging /> */}
      {/* <Call /> */}
      {/* <FinishOrder /> */}
      {/* <RateFood /> */}
      {/* <RateRestaurant /> */}
      {/* <Voucher /> */}
      {/* <Notification /> */}
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Tab" component={Tabs}></Stack.Screen>
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ tabBarShowLabel: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="DetailRestaurant"
          component={DetailRestaurant}
          options={{ tabBarShowLabel: true }}
        ></Stack.Screen>
        <Stack.Screen name="SetLocation" component={SetLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
