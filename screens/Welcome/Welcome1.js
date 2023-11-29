import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Welcome1 = () => {
  const navigation = useNavigation();
  const handleNextButtonClick = () => {
    navigation.navigate("Welcome2");
  };
  return (
    <View>
      <Image
        source={require("../../assets/images/patter.png")}
        style={{
          width: "100%",
          height: 350,
        }}
      />
      <Image
        source={require("../../assets/images/Logo.png")}
        style={{
          left: 150,
          bottom: 100,
        }}
      />
      <View
        style={{
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
            Join
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome1;
