import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Welcome3 = () => {
  const navigation = useNavigation();
  const handleJoinButtonClick = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <Image
        source={require("../../assets/images/patter.png")}
        style={{
          width: "100%",
        }}
      />
      <View
        style={{
          width: 374,
          height: 398,
          marginTop: -200,
          marginLeft: 60,
        }}
      >
        <Image
          source={require("../../assets/images/cloudy2.png")}
          style={{
            height: "115%",
            width: "115%",
            objectFit: "contain",
            position: "absolute",
            left: -20,
            top: -50,
          }}
        />
        <Image
          source={require("../../assets/images/food9.png")}
          style={{
            height: "50%",
            width: "50%",
            objectFit: "contain",
            left: 20,
          }}
        />
        <Image
          source={require("../../assets/images/food1.png")}
          style={{
            height: "52%",
            width: "52%",
            objectFit: "contain",
            left: 10,
            top: -40,
          }}
        />
        <Image
          source={require("../../assets/images/food5.png")}
          style={{
            height: "52%",
            width: "52%",
            objectFit: "contain",
            left: 200,
            top: -350,
          }}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
          DIDFOOD is Where Your{"\n"} Comfort Food Lives
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            marginTop: 30,
            color: "gray",
          }}
        >
          Enjoyb a fast and smooth food delivery at {"\n"} your doorstep
        </Text>
      </View>
      <View
        style={{
          width: "40%",
          height: 65,
          backgroundColor: "#6B50F6",
          left: 150,
          top: 50,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleJoinButtonClick}>
          <Text
            style={{
              fontSize: 18,
              color: "#ffff",
              fontWeight: "bold",
            }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome3;
