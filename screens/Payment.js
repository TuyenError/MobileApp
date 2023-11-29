import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const Payment = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/Pattern.png")}
        style={{
          position: "absolute",
          marginLeft: 80,
          top: -510,
          transform: [{ rotate: "10deg" }],
          left: 60,
          width: "150%",
        }}
      />
      <View style={styles.ViewBackChat}>
        <Ionicons
          style={{ color: "#6B50F6" }}
          name="chevron-back-outline"
          size={24}
          color="black"
        />
      </View>
      <View style={{marginLeft: 30}}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Payment
        </Text>
        <View style={styles.method}>
          <Image style={{marginLeft: 20}} source={require("../assets/paypal.png")} />
          <Text style={{marginRight: 20, fontSize: 17}}>2121 6352 8465 ****</Text>
        </View>
        <View style={styles.method}>
          <Image style={{marginLeft: 20}} source={require("../assets/visa.png")} />
          <Text style={{marginRight: 20, fontSize: 17}}>2121 6352 8465 ****</Text>
        </View>
        <View style={styles.method}>
          <Image style={{marginLeft: 20}} source={require("../assets/payoneer.png")} />
          <Text style={{marginRight: 20, fontSize: 17}}>2121 6352 8465 ****</Text>
        </View>
      </View>
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
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
  method: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    borderRadius: 20,
    marginTop: 35,
    width: "93%",
    height: 80,
  },
});
