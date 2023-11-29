import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const ChatDetail = ({navigation}) => {

    const messages = [
        {
            name: "Louis Kelly",
            message: "Online",
            profileImage: require("../assets/images/LouisKelly.png"),
            backgroundColor: "#3D405B",
        }
    ];
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require("../assets/images/Pattern.png")}
                    style={styles.ImageCSS}
                ></Image>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Chat")
                    }}
                >
                    <View style={styles.ViewBackChat}>
                        <Ionicons
                            style={{ color: "#6B50F6" }}
                            name="chevron-back-outline"
                            size={24}
                            color="black"
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.TitleChat}>Chat</Text>
                {messages.map((message, index) => (
                    <View key={index}>
                        <TouchableOpacity>
                            <View style={styles.chating} key={index}>
                                <View
                                    style={{
                                        ...styles.photoProfile,
                                        backgroundColor: message.backgroundColor,
                                    }}
                                >
                                    <Image
                                        source={message.profileImage}
                                        style={styles.ImagePhotoProfile}
                                    />
                                </View>
                                <View style={styles.NameAndNotification}>
                                    <Text style={{ marginLeft: 10, marginTop: 7 }}>
                                        {message.name}
                                    </Text>
                                    <Text style={{ marginLeft: 10, marginTop: 7, opacity: 0.3 }}>
                                        {message.message}
                                    </Text>
                                </View>
                                <View style={styles.TimeInChating}>
                                    <Text style={{ opacity: 0.3 }}>Call</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
                <View
                    style={styles.ViewsamplechatingYourFriend}>
                    <Text style={styles.Textsamplechat}>
                        Just to order
                    </Text>
                </View>
                <View
                    style={styles.ViewsampleMychating}>
                    <Text style={styles.TextMysamplechat}>
                        Just to order
                    </Text>
                </View>
                <View
                    style={styles.ViewsamplechatingYourFriend}>
                    <Text style={styles.Textsamplechat}>
                        Okey, wait a minute
                    </Text>
                </View>
                <View
                    style={styles.ViewsampleMychating}>
                    <Text style={styles.TextMysamplechat}>
                        Okey, I'm waiting
                    </Text>
                </View>

            </View>
        </>
    )
}
export default ChatDetail;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFF",
        height: 920,

    },
    ImageCSS: {
        position: "absolute",
        transform: [{ rotate: "-25deg" }],
        width: 1100,
        height: 2000,
        objectFit: 'contain',
        right: -270,
        top: -1160,
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
        opacity: 0.7
    },
    TitleChat: {
        marginLeft: 30,
        marginTop: 15,
        fontSize: 25,
        fontWeight: "bold",
    },
    chating: {
        height: 92,
        backgroundColor: "white",
        borderRadius: 22,
        width: "88%",
        marginTop: 25,
        marginLeft: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 30
    },
    photoProfile: {
        height: 62,
        width: 62,
        borderRadius: 16,
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    NameAndNotification: {
        height: 62,
        width: 250,
        backgroundColor: "white",
        borderRadius: 16,
    },
    TimeInChating: {
        height: 62,
        width: 62,
        backgroundColor: "white",
        borderRadius: 16,
        marginRight: 15,
        alignItems: "center",
    },
    ViewsamplechatingYourFriend: {
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        marginLeft: 30,
        marginTop: 20,
        borderRadius: 13,
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 30,
        alignSelf: 'flex-start',
        maxWidth: 230,
    },
    Textsamplechat: {
        opacity: 0.8,
        color: "#181818",
        fontSize: 14
    },
    ViewsampleMychating: {
        backgroundColor: "#6B50F6",
        marginTop: 20,
        borderRadius: 13,
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 30,
        alignSelf: 'flex-start',
        maxWidth: 230,
        marginLeft: 300

    },
    TextMysamplechat: {
        opacity: 0.8,
        color: "#FFFF",
        fontSize: 14,
        textAlign: 'right',
    }

});