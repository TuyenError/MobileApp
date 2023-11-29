import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Voucher = () => {
  return (
    <View>
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
          Voucher Promo
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#6B50F6",
          width: "87%",
          height: 140,
          borderRadius: 15,
          marginLeft: 30,
          marginTop: 40,
        }}
      >
        <Image
          source={require("../assets/images/girl.png")}
          style={{
            marginTop: 18,
          }}
        />
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            color: "white",
            marginTop: -130,
            marginLeft: 180,
          }}
        >
          Special Deal For {"\n"}October
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 45,
            width: "30%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginLeft: 180,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "green" }}>Buy Now</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#E9F7BA", 
          width: "87%",
          height: 140,
          borderRadius: 15,
          marginLeft: 30,
          marginTop: 40,
        }}
      >
        <Image
          source={require("../assets/images/flower.png")}
          style={{
            objectFit: "contain",
            width: 310,
            height:310,
            marginTop: -85
          }}
        />
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            color: "#6B3A5B",
            marginLeft: 180,
            marginTop : -215
          }}
        >
          Special Deal For {"\n"}October
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 45,
            width: "30%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginLeft: 180,
            marginTop: 10,
          }}
        >
          <Text>Buy Now</Text>
        </View>
      </View>
      <TouchableOpacity
          onPress={"Profile"}
          style={{
            width: "87%",
            height: 60,
            backgroundColor: "#6B50F6",
            left: 30,
            top: 250,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#ffff",
              fontWeight: "bold",
            }}
          >
            Check out
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Voucher;
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
