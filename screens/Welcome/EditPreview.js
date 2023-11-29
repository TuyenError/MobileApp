import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EditPreview = () => {
    const navigation = useNavigation();
    const handleNextButtonClick = () => {
      navigation.navigate("SetLocation")
    };
  return (
    <View>
    <Image
      source={require("../../assets/images/Pattern.png")}
      style={styles.ImageCSS}
    ></Image>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile");
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
        style={{ fontSize: 25, fontWeight: "bold", left: 30, marginTop: 20 }}
      >
        Upload Your Photo {"\n"}Profile
      </Text>
    </View>
    <View>
      <Text style={{ fontSize: 13, left: 30, marginTop: 20, opacity: 0.3 }}>
        The data will be displayed in your account{"\n"}profile for security
      </Text>
    </View>
    <View>
        <Image source={require('../../assets/photoprofile.png')}
            style={{
                borderRadius: 20,
                marginTop: 60,
                marginLeft: 60,
                width: 350,
                height: 350
            }}
        />
    </View>
    <View
          style={{
            marginTop: 120,
            width: "40%",
            height: 65,
            backgroundColor: "#6B50F6",
            left: 150,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleNextButtonClick}>
            <Text
              style={{
                fontSize: 18,
                color: "#ffff",
                fontWeight: "bold",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
  </View>
  )
}

export default EditPreview;
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
});