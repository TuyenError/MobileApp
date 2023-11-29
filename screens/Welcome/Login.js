import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { addUser } from "../Data/UserData";
import { GetCardAPI } from "../../functions/GetCard";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  const handleLogin = async () => {
    try {
      if (!email) {
        Alert.alert("Error", "Please enter your email");
        return;
      }

      if (!password) {
        Alert.alert("Error", "Please enter your password");
        return;
      }
      const response = await fetch(
        "https://654dfab8cbc3253557422fdf.mockapi.io/Users",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const user = data.find((user) => user.email === email);
      addUser(user);
      if (user && user.password === password) {
        GetCardAPI();
        Alert.alert("Success", "Account login successfully!", [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Home");
            },
          },
        ]);
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#fcfdff", paddingBottom: 30 }}>
        <Image
          source={require("../../assets/images/patter.png")}
          style={{
            width: "100%",
            height: 320,
          }}
        />
        <Image
          source={require("../../assets/logoLogin.png")}
          style={{
            left: 180,
            width: 120,
            height: 220,
            bottom: 270,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              bottom: 210,
              textAlign: "center",
            }}
          >
            Login To Your Account
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Email"
            style={{
              top: -170,
              height: 60,
              width: "90%",
              borderRadius: 7,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 20,
              marginLeft: 25,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              top: -160,
              height: 60,
              width: "90%",
              borderRadius: 7,
              borderColor: "#DDDDDD",
              borderWidth: 1,
              paddingLeft: 20,
              marginLeft: 25,
            }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ top: -130 }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
          >
            Or Continue With{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            top: -100,
          }}
        >
          <View
            style={{
              width: "40%",
              height: 60,
              backgroundColor: "#FFFF",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              left: 30,
              borderRadius: 15,
              borderColor: "#DDDDDD",
              borderWidth: 1,
            }}
          >
            <Image
              style={{ left: 30, width: 35, height: 35 }}
              source={require("../../assets/fb.png")}
            />
            <Text style={{ right: 30, fontSize: 18 }}>Facebook</Text>
          </View>
          <View
            style={{
              width: "40%",
              height: 60,
              backgroundColor: "#FFFF",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              right: 30,
              borderRadius: 15,
              borderColor: "#DDDDDD",
              borderWidth: 1,
            }}
          >
            <Image
              style={{ left: 42, width: 35, height: 35 }}
              source={require("../../assets/gg.png")}
            />
            <Text style={{ right: 42, fontSize: 18 }}>Google</Text>
          </View>
        </View>
        <View style={{ top: -80 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
              color: "#6B50F6",
              textDecorationLine: "underline",
            }}
          >
            Forgot Your Password
          </Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                color: "#6B50F6",
                textDecorationLine: "underline",
              }}
            >
              Don't have any account?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            width: "40%",
            height: 65,
            backgroundColor: "#6B50F6",
            left: 150,
            top: -50,
            borderRadius: 20,
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Login;