import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Welcome2 = () => {
  const navigation = useNavigation();
  const handleNextButtonClick = () => {
    navigation.navigate("Welcome3");
  };
  return (
    <>
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
            source={require("../../assets/images/cloudy.png")}
            style={{
              height: "110%",
              width: "110%",
              objectFit: "contain",
              position: "absolute",
              left: -20,
              top: -40,
            }}
          />
          <Image
            source={require("../../assets/images/food10.png")}
            style={{
              height: "50%",
              width: "50%",
              objectFit: "contain",
              left: 20,
              top: -20,
            }}
          />
          <Image
            source={require("../../assets/images/food4.png")}
            style={{
              height: "52%",
              width: "52%",
              objectFit: "contain",
              left: 60,
              top: -60,
            }}
          />
          <Image
            source={require("../../assets/images/food7.png")}
            style={{
              height: "55%",
              width: "55%",
              objectFit: "contain",
              left: 200,
              top: -330,
            }}
          />
        </View>
        <View>
          <Text
            style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
          >
            Find your Comfort{"\n"} Food here
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginTop: 50,
              color: "gray",
            }}
          >
            Here You Can find a chef or dish for every {"\n"} taste and
            color.Enjoy!
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
    </>
  );
};

export default Welcome2;
