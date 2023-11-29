import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const PaymentMethod = ({ navigation }) => {
    return (
        <View>
            <Image
                source={require("../../assets/images/Pattern.png")}
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
            <View style={{ marginLeft: 30 }}>
                <Text
                    style={{
                        marginTop: 15,
                        fontSize: 25,
                        fontWeight: "bold",
                    }}
                >
                    Payment Method
                </Text>
                <View style={styles.button}>
                    <Text style={styles.rank}>This data will be displayed in your account {'\n'}profile for security</Text>
                </View>
                <View style={styles.method}>
                    <Image style={{ marginLeft: 20 }} source={require("../../assets/paypal.png")} />
                </View>
                <View style={styles.method}>
                    <Image style={{ marginLeft: 20 }} source={require("../../assets/visa.png")} />
                </View>
                <View style={styles.method}>
                    <Image style={{ marginLeft: 20 }} source={require("../../assets/payoneer.png")} />
                </View>

                <TouchableOpacity style={styles.Button}
                    onPress={() => {
                        navigation.navigate("EditProfile")
                    }}
                >
                    <Text style={styles.ButtonText}>Next</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default PaymentMethod;
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
    rank: {
        fontSize: 12,
        lineHeight: 22,
        color: "#22242e",
        textAlign: "left",
        width: 239,
        marginTop: 20,

    },
    method: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F8FF",
        borderRadius: 20,
        marginTop: 10,
        width: "93%",
        height: 80,
    },

    Button: {
        backgroundColor: '#6b50f6',
        borderRadius: 15,
        padding: 15,
        marginTop: 200,
        marginLeft: 100,
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonText: {
        color: '#fff',
        width: 100,
        textAlign: "center",

    }
});
