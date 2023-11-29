import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ChatDetail from "./ChatDetail";



const Chat = () => {
  const navigation = useNavigation();
  const messages = [
    {
      name: "Louis Kelly",
      message: "Your Order just Arrived!",
      time: "20:00",
      profileImage: require("../assets/images/LouisKelly.png"),
      backgroundColor: "#3D405B",
    },
    {
      name: "Paul Koch",
      message: "Your Order just Arrived!",
      time: "20:00",
      profileImage: require("../assets/images/PaulKoch.png"),
      backgroundColor: "#81B29A",
    },
    {
      name: "Carla Klein",
      message: "Your Order just Arrived!",
      time: "20:00",
      profileImage: require("../assets/images/CarlaKlein.png"),
      backgroundColor: "#FFAFCC",
    },
  ];



  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Pattern.png")}
          style={styles.ImageCSS}
        ></Image>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
          }}

        >
          <View style={styles.ViewBackChat}>
            <Ionicons
              style={{ color: "#6B50F6" }}
              name="chevron-back-outline"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.TitleChat}>Chat</Text>
        {/* khung body tin nhắn */}
        {messages.map((message, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ChatDetail")
              }}>
              <View style={styles.chating} >
                <View
                  style={{
                    ...styles.photoProfile,
                    backgroundColor: message.backgroundColor,
                  }}
                >
                  <Image
                    source={message.profileImage}
                    style={styles.ImagePhotoProfile}
                  />
                </View>
                <View style={styles.NameAndNotification}>
                  <Text style={{ marginLeft: 10, marginTop: 7 }}>
                    {message.name}
                  </Text>
                  <Text style={{ marginLeft: 10, marginTop: 7, opacity: 0.3 }}>
                    {message.message}
                  </Text>
                </View>
                <View style={styles.TimeInChating}>
                  <Text style={{ opacity: 0.3 }}>{message.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  );
}

export default Chat;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FF",
    height: 920,
  },
  ImageCSS: {
    position: "absolute",
    marginLeft: 80,
    top: -480,
    transform: [{ rotate: "10deg" }],
    left: 60,
    width: "150%",
  },
  ViewBackChat: {
    height: 45,
    width: 45,
    backgroundColor: "#f0edfe",
    borderRadius: 15,
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  TitleChat: {
    marginLeft: 30,
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  chating: {
    height: 81,
    backgroundColor: "white",
    borderRadius: 22,
    width: "88%",
    marginTop: 25,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  photoProfile: {
    height: 62,
    width: 62,
    borderRadius: 16,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ImagePhotoProfile: {},
  NameAndNotification: {
    height: 62,
    width: 250,
    backgroundColor: "white",
    borderRadius: 16,
  },
  TimeInChating: {
    height: 62,
    width: 62,
    backgroundColor: "white",
    borderRadius: 16,
    marginRight: 10,
    alignItems: "center",
  },
});


