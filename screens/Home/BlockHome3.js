import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import dishes from "../Data/DataDish";
import restaurants from "../Data/DataRes";
const BlockHome3 = () => {
  const filters = [
    {
      title: "Type",
      options: ["Restaurant"],
    },
    {
      title: "Location",
      options: ["1 Km", "< 10 Km", "> 10 Km"],
    },
    {
      title: "Food",
      options: ["Cake", "Soup", "Main Course", "Appetizer", "Dessert"],
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [fullData, setFullData] = useState([]);

  const navigation = useNavigation();
  const conditionNavigation = () => {
    navigation.navigate("OptionFilter");
  };

  // find items when user click option

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const toggleFilter = (option) => {
    // Kiểm tra xem lựa chọn đã tồn tại trong mảng chưa
    const isOptionSelected = selectedOptions.includes(option);

    // Nếu đã chọn, loại bỏ nó khỏi mảng
    if (isOptionSelected) {
      const updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
      setSelectedOptions(updatedOptions);
    } else {
      // Nếu chưa chọn, thêm nó vào mảng
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // hidden optio show items

  const [filteredDishes, setFilteredDishes] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearch = () => {
    // tìm tại Dish
    if (
      selectedOptions.some((option) =>
        ["Cake", "Soup", "Main Course", "Appetizer", "Dessert"].includes(option)
      )
    ) {
      const NewDishes = dishes.filter((dish) =>
        selectedOptions.includes(dish.type)
      );
      setFilteredDishes(NewDishes);
    } else {
      setFilteredDishes([]);
    }

    // tìm tại res
    if (selectedOptions.length == 1 && selectedOptions[0] == "Restaurant") {
      const NewRestaurants = restaurants
      setFilteredRestaurants(NewRestaurants);
    }
    else if (
      selectedOptions.includes("Restaurant") ||
      selectedOptions.some((option) =>
        ["1 Km", "< 10 Km", "> 10 Km"].includes(option)
      )
    ) {
      const NewRestaurants = restaurants.filter((restaurant) => {
        return (
          (selectedOptions.includes("Restaurant") &&
            restaurant.desription === "Restaurant") ||
          (
            (selectedOptions.includes("1 Km") && restaurant.location === "1 Km") ||
            (selectedOptions.includes("< 10 Km") && restaurant.location !== "> 10 Km") ||
            (selectedOptions.includes("> 10 Km") && restaurant.location === "> 10 Km")
          )
        );
      });
      setFilteredRestaurants(NewRestaurants);


    } else {
      setFilteredRestaurants([]);
    }
    setShowSearchResults(true);
  };
  const [matchingResIds, setMatchingResIds] = useState([]);

  useEffect(() => {
    // Log dữ liệu sau khi state đã được cập nhật
    console.log("filteredDishes: ", filteredDishes);
    console.log("filteredRestaurants: ", filteredRestaurants);

    const newMatchingResIds = [];

    // Duyệt qua mỗi dish trong filteredDishes
    for (const filteredDish of filteredDishes) {
      // Duyệt qua mỗi restaurant trong filteredRestaurants
      for (const filteredRestaurant of filteredRestaurants) {
        // So sánh ID_res của dish với ID của restaurant
        if (filteredDish.id_res === filteredRestaurant.id) {
          // Nếu trùng khớp, thêm ID của dish vào mảng matchingDishIds
          newMatchingResIds.push(filteredRestaurant);
        }
      }
    }
    setMatchingResIds(newMatchingResIds)
  }, [filteredDishes, filteredRestaurants]);

  useEffect(() => {
    console.log("matchingDishIds: ", matchingResIds);
  }, [matchingResIds]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.ImageCSS}
        />
        <View style={{ marginLeft: 30 }}>
          <View style={styles.viewtitlehome}>
            <Text style={styles.titleTexthome}>
              Find Your{"\n"}Favorite Food
            </Text>
            <TouchableOpacity>
              <View style={styles.viewIconNotificationHome}>
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
          </View>
          <View style={styles.viewInputHome}>
            <Ionicons
              style={{ position: "absolute", zIndex: 2, marginLeft: 15 }}
              name="search-outline"
              color={"#6B50F6"}
              size={30}
            ></Ionicons>
            <TextInput
              style={styles.searchHome}
              placeholder="What do you want to order?"
              textAlignVertical="center"
              size={50}
              placeholderTextColor="#bbaefb"
              autoCapitalize="none"
              autoCorrect={false}
              value={searchQuery}
              onChange={(query) => handelSearch(query)}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FFFF",
          display: showSearchResults ? "none" : "block",
        }}
      >
        {filters.map((filter, index) => (
          <View key={index} style={styles.search}>
            <Text style={styles.titles}>{filter.title}</Text>
            <View style={styles.blockwords}>
              {filter.options.map((option, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={{
                    backgroundColor: selectedOptions.includes(option)
                      ? "#6B50F6"
                      : "#e5fff0",
                    ...styles.totalwords,
                  }}
                  onPress={() => toggleFilter(option)}
                >
                  <Text
                    style={{
                      ...styles.words,
                      color: selectedOptions.includes(option)
                        ? "white"
                        : "#6B50F6",
                    }}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: showSearchResults ? "block" : "none",
          alignItems: "center",
        }}
      >
        <View>

          {matchingResIds.length > 0 ? (
            <>
              <Text style={{ marginTop: 20, fontWeight: "800" }}>Restaurants:</Text>
              <View style={{ ...styles.restaurantsss, columnGap: 20, marginHorizontal: 30 }}>
                {matchingResIds.length > 0 ? (
                  matchingResIds.map((item) => (
                    <View key={item.id} style={styles.rest1}>
                      <Image source={item.image} />
                      <Text style={styles.restName}>{item.name}</Text>
                      <Text style={styles.restTime}>{item.time}</Text>
                      <Text style={styles.restTime}>{item.location}</Text>
                    </View>
                  ))
                ) : (
                  <Text>Không có nhà hàng phù hợp</Text>
                )}
              </View>
            </>
          ) : filteredDishes.length > 0 && filteredRestaurants.length == 0 ? (
            <>
              <Text style={{ marginTop: 20, fontWeight: "800" }}>Dishes:</Text>
              {filteredDishes.map((dish, index) => (
                <View style={styles.dish} key={index}>
                  {/* onPress={() => handleAddToApi(dish.id)} */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("DetailProduct", {
                        productId: dish.id,
                      });
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        width: 370,
                      }}
                    >
                      <Image source={{ uri: dish.image }} style={styles.imageCss} />
                      <View
                        style={{
                          justifyContent: "center",
                          width: 230,
                          marginRight: 30,
                        }}
                      >
                        <Text style={styles.namedish}>{dish.name}</Text>
                        <Text style={styles.descri}>{dish.description}</Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          marginRight: 20,
                        }}
                      >
                        <Text style={styles.price}>${dish.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </>
          ) : filteredRestaurants.length > 0 && filteredDishes.length == 0 ? (
            <>
              <Text style={{ marginTop: 20, fontWeight: "800" }}>Restaurants:</Text>
              <View style={{ ...styles.restaurantsss, columnGap: 20, marginHorizontal: 30 }}>
                {filteredRestaurants.length > 0 ? (
                  filteredRestaurants.map((item) => (
                    <View key={item.id} style={styles.rest1}>
                      <Image source={item.image} />
                      <Text style={styles.restName}>{item.name}</Text>
                      <Text style={styles.restTime}>{item.time}</Text>
                      <Text style={styles.restTime}>{item.location}</Text>
                    </View>
                  ))
                ) : (
                  <Text>Không có nhà hàng phù hợp</Text>
                )}
              </View>
            </>
          ) : (
            <Text>Không có nhà hàng phù hợp</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default BlockHome3;

const styles = StyleSheet.create({
  search: {
    marginTop: 20,
    marginLeft: 20,
  },
  titles: {
    fontSize: 17,
    fontWeight: "bold",
  },
  blockwords: {
    marginTop: 20,
    flexDirection: "row",
    width: "70%",
    flexWrap: "wrap",
    columnGap: 20,
    gap: 20,
  },
  totalwords: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: 50,
    borderRadius: 20,
  },
  words: {
    color: "#6B50F6",
    fontSize: 14,
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#6B50F6",
    width: "85%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 35,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#FFFF",
    height: 220,
    top: -50,
  },
  ImageCSS: {
    height: "430%",
    width: "430%",
    marginLeft: -500,
    marginTop: -630,
    transform: [{ rotate: "10deg" }],
    objectFit: "contain",
  },
  viewtitlehome: {
    marginTop: -220,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleTexthome: {
    color: "#22242E",
    fontSize: 40,
    fontWeight: "bold",
  },
  viewIconNotificationHome: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    borderColor: "red",
    backgroundColor: "white",
    marginRight: 100,
  },
  Havenotification: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "red",
    top: -30,
    left: 5,
  },
  viewInputHome: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
  },
  iconnotificationhome: {},
  searchHome: {
    width: "60%",
    height: 50,
    backgroundColor: "#f0edfe",
    padding: 10,
    borderRadius: 15,
    color: "#6B50F6",
    textAlign: "center",
  },
  ViewSelectOption: {
    width: 57,
    height: 50,
    backgroundColor: "#f0edfe",
    color: "#6B50F6",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconOptionsHome: {
    alignSelf: "center",
  },
  // css dư lieu da tim mra
  dish: {
    marginTop: 30,
    backgroundColor: "#FFFF",
    borderRadius: 20,
    width: 400,
    height: 87,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCss: {
    height: 64,
    width: 64,
    borderRadius: 10,
  },
  namedish: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descri: {
    color: "gray",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B50F6",
    position: "absolute",
    right: 0,
  },
  restaurantsss: {
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
