import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Home from "./Home";
const restaurants = [
  {
    id: 1,
    name: "Vegan Resto",
    image: require("../../assets/restaurantImage2.png"),
    location: "1 Km",
    time: "10 Mins",
    desription: "Restaurant",
  },
  {
    id: 2,
    image: require("../../assets/restaurantImage1.png"),
    name: "Healthy Food",
    location: "1 Km",
    time: "10 Mins",
    desription: "Restaurant",
  },
  {
    id: 3,
    image: require("../../assets/rest3.png"),
    name: "Good Food",
    location: "< 10 Km",
    time: "15 Mins",
    desription: "Restaurant",
  },
  {
    id: 4,
    image: require("../../assets/rest4.png"),
    name: "Gold Restaurant",
    location: "< 10 Km",
    time: "15 Mins",
    desription: "Restaurant",
  },
  {
    id: 5,
    image: require("../../assets/rest5.png"),
    name: "Vip Retaurant",
    location: "> 10 Km",
    time: "30 Mins",
    desription: "Restaurant",
  },
  {
    id: 6,
    image: require("../../assets/rest6.png"),
    name: "Friendly Restaurant",
    location: "> 10 Km",
    time: "30 Mins",
    desription: "Restaurant",
  },
];

const BlockHome2 = () => {
  return (
    <>
      <ScrollView>
        <Home></Home>
        <View style={styles.body}>
          <View>
            <Text style={styles.restpopular}>Popular Restaurant</Text>
          </View>
          <View style={{ ...styles.restaurant, marginHorizontal: 30 }}>
            {restaurants.map((item, index) => (
              <View key={item.id} style={styles.rest1}>
                <Image source={item.image} />
                <Text style={styles.restName}>{item.name}</Text>
                <Text style={styles.restTime}>{item.time}</Text>
                <Text style={styles.restTime}>{item.location}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BlockHome2;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F8F8FF",
    height: "100%",
    paddingBottom: 110,
  },
  restpopular: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 30,
  },
  restaurant: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  rest1: {
    width: 150,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: 180,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  restName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restTime: {
    fontSize: 15,
    color: "gray",
    marginTop: 5,
  },
});
