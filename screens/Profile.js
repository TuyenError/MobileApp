import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { React } from "react";
import { UsersData } from "./Data/UserData";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const userData = UsersData;
  const navigation = useNavigation();
  const handleNextButtonClick = () => {
    navigation.navigate("EditProfile");
  };
  const data = [
    {
      image: require("../assets/favomenu.png"),
      name: "Spacy fresh crab",
      restaurant: "Waroenk kito",
      price: "$35",
    },
    {
      image: require("../assets/soup.png"),
      name: "Spacy fresh crab",
      restaurant: "Waroenk kito",
      price: "$35",
    },
    {
      image: require("../assets/ice.png"),
      name: "Spacy fresh crab",
      restaurant: "Waroenk kito",
      price: "$35",
    },
  ];
  return (
    <>
      <ScrollView>
        <View style={{ paddingBottom: 100 }}>
          <View>
            <Image
              source={require("../assets/photoprofile.png")}
              style={{
                width: "100%",
                height: 400,
              }}
            />
          </View>
          <View style={styles.infor}>
            <View style={styles.button}>
              <Text style={styles.rank}>Member Gold</Text>
            </View>
            <View style={styles.viewinfo}>
              {userData.map((user, index) => (
                <View key={index}>
                  <Text style={styles.name}>{user.username}</Text>
                  <Text style={styles.email}>{user.email}</Text>
                </View>
              ))}
              <View>
                <TouchableOpacity onPress={handleNextButtonClick}>
                  <Image
                    source={require("../assets/edit.png")}
                    style={{
                      marginRight: 50,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginTop: 11,
                backgroundColor: "white",
                borderRadius: 20,
                width: "88%",
                height: 64,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ marginLeft: 10 }}>
                <Image source={require("../assets/voucher.png")} />
              </View>
              <View style={{ marginRight: 210 }}>
                <Text style={{ fontSize: 15 }}>You Have 3 voucher</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.favo}>Favorite</Text>
          </View>
          <View>
            {data.map((food, index) => (
              <View key={index} style={styles.favomenu}>
                <Image style={styles.imgfavo} source={food.image} />
                <View style={styles.desfavo}>
                  <Text style={{ fontSize: 15, fontWeight: "600" }}>
                    {food.name}
                  </Text>
                  <Text style={{ fontSize: 14, opacity: 0.3 }}>
                    {food.restaurant}
                  </Text>
                  <Text
                    style={{
                      color: "#6B50F6",
                      fontSize: 19,
                      fontWeight: "900",
                    }}
                  >
                    {food.price}
                  </Text>
                </View>
                <View style={styles.btnbuyagain}>
                  <Text style={{ color: "white" }}>Buy Again</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  infor: {
    marginTop: -40,
    height: 225,
    backgroundColor: "white",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },
  rank: {
    color: "#6B50F6",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 20,
    width: 140,
    height: 40,
    backgroundColor: "#e5fff0",
    borderRadius: 25,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 15,
  },
  email: {
    fontSize: 14,
    marginLeft: 20,
    opacity: 0.3,
  },
  favo: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 18,
    marginLeft: 27,
  },
  favomenu: {
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 27,
    backgroundColor: "white",
    borderRadius: 20,
    height: 103,
    width: "88%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgfavo: {
    marginLeft: 15,
  },
  desfavo: {
    width: 220,
    marginLeft: 20,
  },
  btnbuyagain: {
    marginRight: 20,
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    height: 29,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
  },
  viewinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
