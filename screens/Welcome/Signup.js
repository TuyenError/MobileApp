import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeepSignedIn, setIsKeepSignedIn] = useState(false);
  const [isEmailSpecialPricing, setIsEmailSpecialPricing] = useState(false);
  const handleCreateAccount = async () => {
    try {
      const response = await fetch(
        "https://654dfab8cbc3253557422fdf.mockapi.io/Users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            isKeepSignedIn,
            isEmailSpecialPricing,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Account created successfully!", [
          {
            text: "OK",
            onPress: () => {
              // Navigate to the login screen
              navigation.navigate("SignupProcess"); // Assuming 'Login' is the name of your login screen
            },
          },
        ]);
      } else {
        Alert.alert("Error", data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };
  const [Radio1, setRadio1] = useState(false);
  const [Radio2, setRadio2] = useState(false);

  const handleChangeRadio1 = () => {
    setRadio1(!Radio1);
  };

  const handleChangeRadio2 = () => {
    setRadio2(!Radio2);
  };

  const handleSignUp = () => {
    navigation.navigate("Login");
  };
  return (
    <ScrollView>
      <View style={{ paddingBottom: 100 }}>
        <Image
          source={require("../../assets/images/patter.png")}
          style={{
            width: "100%",
            height: 350,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../../assets/logoLogin.png")}
            style={{ marginTop: -250 }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sign Up For Free
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 57,
              width: 375,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#DDDDDDDD",
              marginTop: 15,
            }}
          >
            <Image
              style={{ marginLeft: 20 }}
              source={require("../../assets/Profile.png")}
            />
            <TextInput
              placeholder="Enter your username..."
              placeholderTextColor="#DDDDDD"
              style={{
                width: "80%",
                paddingLeft: 20,
                marginRight: 50,
                color: "#22242E",
                fontSize: 15,
              }}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 57,
              width: 375,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#DDDDDDDD",
              marginTop: 15,
            }}
          >
            <Image
              style={{ marginLeft: 20 }}
              source={require("../../assets/Message.png")}
            />
            <TextInput
              placeholder="Enter your email..."
              placeholderTextColor="#DDDDDD"
              style={{
                width: "80%",
                paddingLeft: 20,
                marginRight: 50,
                color: "#22242E",
                fontSize: 15,
              }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 57,
              width: 375,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#DDDDDDDD",
              marginTop: 15,
            }}
          >
            <Image
              style={{ marginLeft: 20 }}
              source={require("../../assets/Lock.png")}
            />
            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor="#DDDDDD"
              style={{
                width: "80%",
                paddingLeft: 20,
                marginRight: 50,
                color: "#22242E",
                fontSize: 15,
              }}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 375,
            marginLeft: 53,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onPress={handleChangeRadio1}
          >
            <View
              style={{ ...styles.radio, display: Radio1 ? "flex" : "none" }}
            ></View>
            <View
              style={{
                display: Radio1 ? "none" : "flex",
                marginRight: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                color={"#6B50F6"}
                size={25}
              ></Ionicons>
            </View>
            <Text style={styles.radioText}>Keep Me Signed In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 375,
            marginLeft: 53,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onPress={handleChangeRadio2}
          >
            <View
              style={{ ...styles.radio, display: Radio2 ? "flex" : "none" }}
            ></View>
            <View
              style={{
                display: Radio2 ? "none" : "flex",
                marginRight: 10,
              }}
            >
              <Ionicons
                name="checkmark-circle"
                color={"#6B50F6"}
                size={25}
              ></Ionicons>
            </View>
            <Text style={styles.radioText}>Email Me About Special Pricing</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleCreateAccount}
          style={{
            width: "40%",
            height: 65,
            backgroundColor: "#6B50F6",
            left: 140,
            top: 20,
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
            Create Account
          </Text>
        </TouchableOpacity>

        <View style={{ top: 30 }}>
          <TouchableOpacity onPress={handleSignUp}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
                color: "#6B50F6",
                textDecorationLine: "underline",
              }}
            >
              already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  radioText: {
    fontSize: 18,
    color: "black",
    marginRight: 320,
    width: 255,
    opacity: 0.3,
  },
  radio: {
    width: 20,
    height: 20,
    borderColor: "#6B50F6",
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 10,
  },
});
