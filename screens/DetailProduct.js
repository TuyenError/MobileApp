import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import dishes from "./Data/DataDish";
import Ionicons from "react-native-vector-icons/Ionicons";
import { UsersData } from "./Data/UserData";
import { addCart, NewCartData } from "./Data/DataCart";
import { GetCardAPI } from '../functions/GetCard';

const DetailProduct = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params;
  const selectedDish = dishes.find((dish) => dish.id === productId);

  const handleAddToCart = async (id) => {
    const id_dish = parseInt(id);
    const id_user = parseInt(UsersData[0].id);
    try {
      const response = await fetch(
        "https://63aa9d20fdc006ba6046fffd.mockapi.io/Storyfinal",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const CartData = data.find(
        (cart) => cart.id_user === id_user && cart.id_dish === id_dish
      );
      // true run method put
      if (CartData) {
        console.log("CartData in chua update: ", CartData);
        const parsedQuantity = parseInt(CartData.quantity, 10) + 1;
        try {
          const updateResponse = await fetch(
            `https://63aa9d20fdc006ba6046fffd.mockapi.io/Storyfinal/${CartData.id}`, // Assuming CartData has an 'id' property
            {
              method: "PUT", // Or "PATCH" depending on your server's API
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                quantity: parsedQuantity,
              }),
            }
          );
          const updateData = await updateResponse.json();
          if (updateResponse.ok) {
            Alert.alert(
              "Success!",
              "Item has been added to your cart.",
              [
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                  style: "default",
                },
              ],
              { cancelable: false }
            );
          } else {
            console.error(
              "Lỗi khi cập nhật quantity trên server:",
              updateData.message || "Something went wrong"
            );
            Alert.alert("Error", data.message || "Something went wrong");
          }
        } catch (error) {
          console.error("Lỗi:", error);
        }
        // else run method post
      } else {
        // chạy cái api method post
        const quantity = 1;
        try {
          const response = await fetch(
            "https://63aa9d20fdc006ba6046fffd.mockapi.io/Storyfinal",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                id_dish,
                id_user,
                quantity,
              }),
            }
          );
          const data = await response.json();
          if (response.ok) {
            Alert.alert(
              "Success!",
              "Item has been added to your cart.",
              [
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                  style: "default",
                },
              ],
              { cancelable: false }
            );
          } else {
            Alert.alert("Error", data.message || "Something went wrong");
          }
        } catch (error) {
          console.log("error: ", error);
          Alert.alert("Error", "Something went wrong. Please try again later.");
        }
      }
      // khi đẩy xong thì get lần nữa lấy tất cả dữ liệu về
      GetCardAPI();
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.HomeBody}>
        <TouchableOpacity
          style={{ position: "absolute", zIndex: 1, top: 15, left: 20 }}
        >
          <View style={styles.ViewBackChat}>
            <Ionicons
              style={{ color: "#6B50F6" }}
              name="chevron-back-outline"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={{ paddingBottom: 10 }}>
          <View>
            <Image
              source={{ uri: selectedDish.image }}
              style={{
                width: "100%",
                height: 400,
              }}
            />
          </View>

          <View style={{ backgroundColor: "#ffff", height: "100%" }}>
            <View style={styles.infor}>
              <View style={styles.button}>
                <Text style={styles.rank}>Popular</Text>
              </View>
              <View
                style={{
                  marginBottom: 30,
                  marginLeft: 190,
                }}
              >
                <Image
                  source={require("../assets/iconlocation.png")}
                  style={{
                    marginRight: 50,
                  }}
                />
              </View>
              <View
                style={{
                  marginBottom: 30,
                  marginLeft: -40,
                }}
              >
                <Image
                  source={require("../assets/iconlove.png")}
                  style={{
                    marginRight: 50,
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={styles.name}>{selectedDish.name}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: "#ffff",
              }}
            >
              <Image
                source={require("../assets/iconstar.png")}
                style={{
                  marginLeft: 25,
                }}
              />
              <Text style={styles.rate}>4.9 Rating</Text>
              <Image
                source={require("../assets/shoppingbag.png")}
                style={{
                  marginLeft: 30,
                }}
              />
              <Text style={styles.rate}>2000+ Order</Text>
            </View>
            <View>
              <Text style={styles.menudesc}>
                Nulla occaecat velit laborum exercitation ullamco. Elit labore
                eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit
                non est cillum consequat cupidatat ex Lorem laboris labore
                aliqua ad duis eu laborum.
              </Text>
              <Text style={styles.menudesc1}>
                * Strowberry {"\n"}* Cream {"\n"}* wheat{"\n"}
              </Text>
              <Text style={styles.menudesc}>
                Nulla occaecat velit laborum exercitation ullamco. Elit labore
                eu aute elit nostrud culpa velit excepteur deserunt sunt.
              </Text>
            </View>
            <View style={styles.comment}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Testimonials
              </Text>
              <View style={styles.userComment}>
                <Image source={require("../assets/photoprofile1.png")} />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "700",
                    marginTop: -40,
                    left: -15,
                  }}
                >
                  Dianne Russell
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    opacity: 0.3,
                    left: -185,
                  }}
                >
                  12 April 2021
                </Text>
                <Image
                  style={{ right: 50 }}
                  source={require("../assets/starIcon.png")}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 90,
                  color: "gray",
                  marginTop: -10,
                }}
              >
                This is greate. So delicious! You Must Here. With Your Family .
                .
              </Text>
              <View style={styles.userComment}>
                <Image source={require("../assets/photoprofile1.png")} />
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "700",
                    marginTop: -40,
                    left: -15,
                  }}
                >
                  Dianne Russell
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    opacity: 0.3,
                    left: -185,
                  }}
                >
                  12 April 2021
                </Text>
                <Image
                  style={{ right: 50 }}
                  source={require("../assets/starIcon.png")}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 90,
                  color: "gray",
                  marginTop: -10,
                }}
              >
                This is greate. So delicious! You Must Here. With Your Family .
                .
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleAddToCart(selectedDish.id)}>
              <View style={styles.btnAddToCart}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#ffff",
                  }}
                >
                  Add To Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailProduct;
const styles = StyleSheet.create({
  HomeBody: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    paddingBottom: 150,
  },
  infor: {
    marginTop: -40,
    height: 155,
    backgroundColor: "white",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rank: {
    color: "#6B50F6",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    marginLeft: 20,
    width: 140,
    height: 40,
    backgroundColor: "#e5fff0",
    borderRadius: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: -50,
    marginLeft: 20,
  },
  rate: {
    fontSize: 15,
    opacity: 0.3,
    marginRight: 100,
  },
  menudesc: {
    fontSize: 15,
    color: "gray",
    marginLeft: 25,
    marginTop: 12,
  },
  menudesc1: {
    fontSize: 15,
    color: "gray",
    marginLeft: 35,
    marginTop: 12,
  },
  comment: {
    marginLeft: 25,
    marginTop: 15,
  },
  userComment: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnAddToCart: {
    backgroundColor: "#6B50F6",
    width: "88%",
    height: 65,
    marginLeft: 30,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewBackChat: {
    backgroundColor: "#ffff",
    height: 40,
    width: 60,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
