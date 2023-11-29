import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/native";

const OrderDetails = ({
  cartItems,
  renderedItems,
  handleDeleteItem,
  styles,
}) => {
  const navigate = useNavigation();
  return (
    <>
      <View>
        <Image
          source={require("../assets/images/Pattern.png")}
          style={styles.ImageCSS}
        />
        <TouchableOpacity>
          <View style={styles.ViewBackChat}>
            <Ionicons
              style={{ color: "#6B50F6" }}
              name="chevron-back-outline"
              size={24}
              color="black"
              onPress={()=>{
                navigate.navigate("Home")
              }}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.TitleChat}>Order details</Text>
        <SwipeListView
          data={cartItems}
          renderItem={({ item, index }) => renderedItems[index]}
          renderHiddenItem={({ item }) => (
            <View style={styles.buttondelete}>
              <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                <Ionicons
                  style={{
                    color: "#FFFF",
                    textAlign: "right",
                    marginRight: 25,
                  }}
                  name="trash-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-75}
          disableRightSwipe={true}
        />
      </View>
    </>
  );
};

export default OrderDetails;
