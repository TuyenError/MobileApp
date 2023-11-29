import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SigupSuccess = () => {
    const navigation = useNavigation();
    const handleNextButtonClick = () => {
      navigation.navigate("Home");
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
        source={require("../../assets/notifi.png")}
        style={{
          marginLeft: 150,
          marginTop: -90,
        }}
      />
      <View>
        <Text style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "#6B50F6",
            marginTop: 25
        }}>Congrats!</Text>
      </View>
      <View>
        <Text style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 20
        }}>
            Your Profile Is Ready To Use
        </Text>
      </View>
      <View
        style={{
          marginTop: 200,
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
            Try Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigupSuccess;
