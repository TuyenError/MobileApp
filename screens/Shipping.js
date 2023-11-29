import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Shipping = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require("../assets/images/Pattern.png")}
                    style={styles.ImageCSS}
                ></Image>
                <TouchableOpacity>
                    <View style={styles.ViewBackChat}>
                        <Ionicons
                            style={{ color: "#6B50F6" }}
                            name="chevron-back-outline"
                            size={24}
                            color="black"
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.TitleChat}>Shipping</Text>
                <View style={{
                    justifyContent: "center", flexDirection: "row"
                }}>
                    <View style={{ backgroundColor: "#FFFF", width: 335, height: 107, borderRadius: 22, marginTop: 20 }}>
                        <View style={{ marginLeft: 12, marginTop: 10, }}>
                            <Text style={{ color: "#22242E", opacity: 0.3 }}>Order Location</Text>
                        </View>
                        <View style={{ fontSize: 15, height: 40, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 12, marginTop: 10 }}>
                            <Image source={require("../assets/images/Home.png")} />

                            <Text style={{ width: 200, marginRight: 80 }}>8502 Preston Rd. Inglewood, Maine 98380</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Shipping;
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
    TitleChat: {
        marginLeft: 30,
        marginTop: 15,
        fontSize: 25,
        fontWeight: "bold",
    },
});