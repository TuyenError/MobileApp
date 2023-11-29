import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";




const API_ENDPOIND = "api"





const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOIND);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json.results);

    } catch (error) {
      setError(error);
      console.log(error);
    }
  };



  const handelSearch = (query) => {
    setsearchQuery(query);

  };


  const navigation = useNavigation();
  const conditionNavigation = () => {
    navigation.navigate("OptionFilter");
  }
  return (
    <>
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
                  style={styles.iconnotificationhome}
                  name="notifications-outline"
                  color={"#6B50F6"}
                  size={30}
                ></Ionicons>
                <View style={styles.Havenotification}></View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.viewInputHome} >
          
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
            
            <TouchableOpacity style={{ marginLeft: 15 }} onPress={conditionNavigation}>
              <View style={styles.ViewSelectOption}>
                <Ionicons
                  style={styles.iconnotificationhome}
                  name="options-outline"
                  color={"#6B50F6"}
                  size={30}
                ></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FF",
    height: 220,
    top: -50
  },
  ImageCSS: {
    height: "430%",
    width: "430%",
    marginLeft: -500,
    marginTop: -630,
    transform: [{ rotate: "10deg" }],
    objectFit: 'contain',
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
    marginRight: 100
  },
  Havenotification: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "red",
    top: -30,
    left: 5
  },
  viewInputHome: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
  },
  iconnotificationhome: {
  },
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
});
