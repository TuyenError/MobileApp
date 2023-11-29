import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SetLocation = () => {
  const navigation = useNavigation();
  const handleNextButtonClick = () => {
    navigation.navigate("SigupSuccess");
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
          Set Your Location
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 13, left: 30, marginTop: 20, opacity: 0.3 }}>
          The data will be displayed in your account{"\n"}profile for security
        </Text>
      </View>
      <View
        style={{
          height: 150,
          width: 400,
          backgroundColor: "white",
          marginLeft: 40,
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 15
        }}
      >
        <Image
          source={require("../../assets/images/locationLogo.png")}
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}
        />
        <Text
          style={{
            left: -235,
            marginTop: 25,
            fontSize: 16,
          }}
        >
          Your Location
        </Text>
      </View>
      <View style={{
        height: 50,
        width: 350,
        borderRadius: 10,
        backgroundColor :"#F8F8FF",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 70,
        marginTop: -60
      }}>
        <Text style={{fontSize: 16}}>Set Location</Text>
      </View>
      <View
        style={{
          marginTop: 320,
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
  );
};

export default SetLocation;
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
