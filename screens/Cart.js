import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import OrderDetails from "./OrderDetails";
import { useNavigation, useRoute } from "@react-navigation/native";
import AwesomeAlert from "react-native-awesome-alerts";
import { UsersData } from "./Data/UserData";
import dishes from "./Data/DataDish";
import { NewCartData } from "./Data/DataCart";
import { updateQuantityItem } from "../functions/GetCard";

const Cart = () => {
  console.log("NewCartData1111111: ", NewCartData);

  const createNewArray = () => {
    const newArray = [];
    NewCartData.forEach((itemA) => {
      const matchingItemB = dishes.find((itemB) => itemA.id_dish === itemB.id);
      if (matchingItemB) {
        newArray.push({
          id: matchingItemB.id,
          quantity: itemA.quantity,
          name: matchingItemB.name,
          image: matchingItemB.image,
          description: matchingItemB.description,
          price: matchingItemB.price,
          discount: matchingItemB.discount,
        });
      }
    });

    return newArray;
  };

  // Gọi hàm và in mảng mới
  const resultArray = createNewArray();

  const route = useRoute();
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();
  const [TotalPricesInCart, setTotalPricesInCart] = useState(calculateTotalCart);
  const [DeliveryCharge, setDeliveryCharge] = useState();
  const [TotalPriceItemsInCart, setTotalPriceItemsInCart] =
    useState(calculateTotalMoney);
  const [TotalDiscountItemsInCart, setTotalDiscountItemsInCart] = useState(
    calculateTotalDiscount
  );

  const [cartItems, setCartItems] = useState(resultArray);
  console.log("cartItems123: ", cartItems);


  const handleDecreaseQuantity = (id) => {
    const updatedItems = [...cartItems];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);

    if (updatedItems[itemIndex].quantity > 1) {
      const updatequantity = updatedItems[itemIndex].quantity -= 1;
      setCartItems(updatedItems);
      const newTotalItemsPrices = calculateTotalMoney();
      setTotalPriceItemsInCart(newTotalItemsPrices);
      const totalDiscount = calculateTotalDiscount();
      setTotalPricesInCart(
        newTotalItemsPrices + DeliveryCharge - totalDiscount
      );
      updateQuantityItem(id, updatequantity)
    }
  };

  const handleIncreaseQuantity = (id) => {
    const updatedItems = [...cartItems];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);

    const updatequantity = updatedItems[itemIndex].quantity += 1;
  setCartItems(updatedItems);
  const newTotalItemsPrices = calculateTotalMoney();
  setTotalPriceItemsInCart(newTotalItemsPrices);
  const totalDiscount = calculateTotalDiscount();
  setTotalPricesInCart(newTotalItemsPrices + DeliveryCharge - totalDiscount);
  updateQuantityItem(id, updatequantity)
};

const handleDeleteItem = (id) => {
  const updatedItems = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedItems);
};

useEffect(() => {
  if (cartItems.length == 0) {
    setDeliveryCharge(0);
  } else {
    setDeliveryCharge(30);
  }
  const newTotalItemsPrices = calculateTotalMoney();
  setTotalPriceItemsInCart(newTotalItemsPrices);

  const totalDiscount = calculateTotalDiscount();
  setTotalDiscountItemsInCart(totalDiscount);
  setTotalPricesInCart(newTotalItemsPrices + DeliveryCharge - totalDiscount);
}, [cartItems]);

useEffect(() => {

  setTotalPricesInCart(TotalPriceItemsInCart + DeliveryCharge - TotalDiscountItemsInCart);

}, [DeliveryCharge, TotalDiscountItemsInCart, TotalPriceItemsInCart]);

const calculateTotalMoney = () => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
const calculateTotalDiscount = () => {
  return cartItems.reduce((acc, item) => acc + item.discount, 0);
};

const calculateTotalCart = () => {
  return TotalPriceItemsInCart + TotalDiscountItemsInCart - DeliveryCharge
}


console.log("TotalPriceItemsInCart: ", TotalPriceItemsInCart);
console.log("TotalDiscountItemsInCart: ", TotalDiscountItemsInCart);
console.log("DeliveryCharge: ", DeliveryCharge);
console.log("TotalPricesInCart new: ", TotalPricesInCart);


const renderedItems = cartItems.map((item, index) => (
  <View key={index}>
    <View style={styles.chating}>
      <View style={styles.photoProfile}>
        <Image source={{ uri: item.image }} style={styles.photoProfile} />
      </View>
      <View style={styles.NameAndNotification}>
        <Text style={{ marginLeft: 10, marginTop: 7 }}>{item.name}</Text>
        <Text style={{ marginLeft: 10, marginTop: 7, opacity: 0.3 }}>
          {item.description}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 7,
            color: "#6B50F6",
            fontWeight: "900",
          }}
        >
          $ {item.price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginRight: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
          <View style={{ ...styles.minus }}>
            <Text style={{ color: "#181818", fontWeight: "900" }}>-</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.quantityItems}>
          <Text style={{ color: "#181818", fontSize: 16 }}>
            {item.quantity}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
          <View style={styles.increase}>
            <Text style={{ color: "#FFFF" }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
));
return (
  <>
    <View style={styles.container}>
      <OrderDetails
        cartItems={cartItems}
        renderedItems={renderedItems}
        handleDeleteItem={handleDeleteItem}
        styles={styles}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.TotalPrices}>
          {/* <Image 
              source={require("../assets/images/Pattern.png")} 
              style={{
                zIndex: 2
              }} 

            /> */}
          <View style={styles.TotalViewNameAndPricesItems}>
            <View style={styles.TitleAndPrices}>
              <Text style={styles.TitleItem}>Sub-Total</Text>
              <Text style={styles.PriceItem}>{TotalPriceItemsInCart} $</Text>
            </View>
            <View style={styles.TitleAndPrices}>
              <Text style={styles.TitleItem}>Delivery Charge</Text>
              <Text style={styles.PriceItem}>{DeliveryCharge} $</Text>
            </View>
            <View style={styles.TitleAndPrices}>
              <Text style={styles.TitleItem}>Discount</Text>
              <Text style={styles.PriceItem}>
                {TotalDiscountItemsInCart} $
              </Text>
            </View>
            <View style={styles.ViewTotal}>
              <Text style={styles.TextTotal}>Total</Text>
              <Text style={styles.TotalPrice}>{TotalPricesInCart} $</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setShowAlert(!showAlert)}>
            <View style={styles.BtnPlaceBuyOrder}>
              <Text style={styles.TextPMO}>Place My Order</Text>
            </View>
          </TouchableOpacity>
          <AwesomeAlert
            style={styles.AlertAddToCart}
            show={showAlert}
            title="thanh cong"
            message="good chop"
          ></AwesomeAlert>
        </View>
      </View>
    </View>
  </>
);
};
export default Cart;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fe",
    paddingBottom: 100,
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
  chating: {
    height: 103,
    backgroundColor: "#FFFF",
    borderRadius: 22,
    width: "90%",
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttondelete: {
    height: 103,
    backgroundColor: "#6B50F6",
    borderRadius: 22,
    width: "90%",
    marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 20,
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
    width: 160,
    borderRadius: 16,
    marginRight: 30,
    marginTop: -30,
  },
  minus: {
    backgroundColor: "#f0edfe",
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  quantityItems: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  increase: {
    backgroundColor: "#6B50F6",
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  TotalPrices: {
    height: 206,
    width: 420,
    backgroundColor: "#6B50F6",
    borderRadius: 16,
    marginTop: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  TotalViewNameAndPricesItems: {
    height: 95,
    width: 295,
    marginTop: 20,
    justifyContent: "space-between",
  },
  TitleAndPrices: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  TitleItem: {
    color: "#FFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  PriceItem: {
    color: "#FFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  ViewTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  TextTotal: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  TotalPrice: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  BtnPlaceBuyOrder: {
    width: 325,
    height: 57,
    borderRadius: 15,
    backgroundColor: "#FFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  TextPMO: {
    color: "#6B50F6",
    fontSize: 14,
    fontWeight: "800",
  },
  AlertAddToCart: {
    backgroundColor: "red",
  },
});
