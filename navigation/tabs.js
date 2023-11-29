import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import Chat from "../screens/Chat";
import Home from "../screens/Home/Home";
import { HomeStack, ChatStack, WelcomeStack } from "./StackNavigation";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          let label;
          let colors;
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
            label = focused ? "Home" : "";
            colors = "#6B50F6";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            label = focused ? "Profile" : "";
            colors = "#6B50F6";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
            label = focused ? "Cart" : "";
            colors = "#6B50F6";
          } else if (route.name === "ChatStack") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
            label = focused ? "Chat" : "";
            colors = "#6B50F6";
          }

          return (
            <View
              style={{
                flexDirection: "row",
                padding: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name={iconName} size={size} color={colors} />
              <Text
                style={{ color: colors, fontWeight: "bold", marginLeft: 10 }}
              >
                {label}
              </Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: { display: getRouteName(route) },
        })}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={({ route }) => ({
          tabBarStyle: { display: getRouteName(route) },
        })}
      />
    </Tab.Navigator>
  );
};

const getRouteName = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (
    routeName?.includes("ChatDetail") ||
    routeName?.includes("Signup") ||
    routeName?.includes("Login") || 
    routeName?.includes("Welcome1") || 
    routeName?.includes("Welcome2") ||
    routeName?.includes("Welcome3")
  ) {
    console.log("routeName: ", routeName);
    return "none";
  } else {
    return "block";
  }
};
export default Tabs;
