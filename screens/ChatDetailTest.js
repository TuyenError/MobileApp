import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";

function MessageHeader({ friend }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image source={friend.profileImage} />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {friend.name}
      </Text>
    </View>
  );
}

function ChatDetailTest() {
  const friend = {
    name: "Louis Kelly",
    message: "Your Order just Arrived!",
    time: "20:00",
    profileImage: require("../assets/images/LouisKelly.png"),
    backgroundColor: "#3D405B",
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{backgroundColor: "red", height: 80}}>
        <MessageHeader friend={friend} />
        <Text>ChatDetailTest</Text>
      </View>
    </SafeAreaView>
  );
}
export default ChatDetailTest;
