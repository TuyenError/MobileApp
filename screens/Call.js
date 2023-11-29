import { View, Text, Image } from "react-native";
import React from "react";

const Call = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/patter.png")}
        style={{
          width: "100%",
          height: 350,
        }}
      />
      <Image
        source={require("../assets/Image.png")}
        style={{
          marginLeft: 150,
          marginTop: -70,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 35,
          }}
        >
          Richard Lewis
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.3,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Ringing ...
        </Text>
      </View>
      <View style={{
        flexDirection: "row",
      }}>
        <Image source={require("../assets/images/muteicon.png")} 
            style={{
                marginLeft: 150,
                marginTop: 150
            }}
        />
        <Image source={require("../assets/images/closeicon.png")} 
            style={{
                marginLeft: 20,
                marginTop: 150
            }}
        />
      </View>
    </View>
  );
};

export default Call;
