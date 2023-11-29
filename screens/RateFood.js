import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const RateFood = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/patter.png")}
        style={{
          width: "100%",
          height: 350,
        }}
      />
      <Image
        source={require("../assets/images/rateFood.png")}
        style={{
          marginLeft: 150,
          marginTop: -90,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Thank You! {"\n"} Enjoy Your Meal
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            opacity: 0.3,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Please rate your Food
        </Text>
      </View>
      <View style={{ marginLeft: 120, marginTop: 40 }}>
        <Image source={require("../assets/images/staricon.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 57,
          width: 375,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#DDDDDDDD",
          marginTop: 30,
          marginLeft: 50,
        }}
      >
        <Image
          style={{ marginLeft: 20 }}
          source={require("../assets/images/editicon.png")}
        />
        <TextInput
          placeholder="Leave feedback"
          placeholderTextColor="#DDDDDD"
          style={{
            width: "80%",
            paddingLeft: 20,
            marginRight: 50,
            color: "#22242E",
            fontSize: 15,
          }}
        />
      </View>
      <View style={{
        flexDirection: "row",
      }}>
        <TouchableOpacity
          onPress={"Profile"}
          style={{
            width: "50%",
            height: 60,
            backgroundColor: "#6B50F6",
            left: 50,
            top: 20,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#ffff",
              fontWeight: "bold",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              height: 50,
              width: "50%",
              marginLeft : 70,
              marginTop : 28
            }}
          >
            <Text
              style={{
                color: "#6B50F6",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Skip
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RateFood