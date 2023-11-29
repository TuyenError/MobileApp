import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Notification = () => {
  return (
    <View style={{backgroundColor : "#F8F8FF" , height : "100%"}}>
      <Image
        source={require("../assets/images/Pattern.png")}
        style={styles.ImageCSS}
      ></Image>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
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
      <View>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          Notification
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 30,
          backgroundColor: "#FFFF",
          height: 120,
          width: "88%",
          borderRadius: 15,
          marginTop : 30
        }}
      >
        <Image
          source={require("../assets/images/checked.png")}
          style={{
            marginTop: 40,
            marginLeft: 25,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginLeft: 30,
            marginTop: 20,
          }}
        >
          Your order has been taken by {"\n"}the driver
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: -210,
            marginTop: 60,
            opacity : 0.3
          }}
        >
          Recently
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 30,
          backgroundColor: "#FFFF",
          height: 100,
          width: "88%",
          borderRadius: 15,
          marginTop : 30
        }}
      >
        <Image
          source={require("../assets/images/money.png")}
          style={{
            marginTop: 30,
            marginLeft: 25,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginLeft: 30,
            marginTop: 25,
          }}
        >
          Topup for $100 was successful
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: -220,
            marginTop: 50,
            opacity : 0.3
          }}
        >
          10:00 Am
        </Text>
      </View><View
        style={{
          flexDirection: "row",
          marginLeft: 30,
          backgroundColor: "#FFFF",
          height: 100,
          width: "88%",
          borderRadius: 15,
          marginTop : 30
        }}
      >
        <Image
          source={require("../assets/images/cancel.png")}
          style={{
            marginTop: 30,
            marginLeft: 25,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginLeft: 30,
            marginTop: 25,
          }}
        >
          Your order has been canceled
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: -210,
            marginTop: 50,
            opacity : 0.3
          }}
        >
          22 July 2021
        </Text>
      </View>
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
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
});
