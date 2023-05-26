
import React from 'react'
import { Dimensions, Text, View, Image } from "react-native";
import Button from './Button'
import Carousel from "react-native-reanimated-carousel";
import { FontAwesome } from "@expo/vector-icons";   
const Slider = () => {
const width = Dimensions.get("window").width;
const images = [
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/5.jpg"),
  require("../assets/6.jpg"),
];
return (
  <>
    <Carousel
      loop
      width={width}
      height={width / 1}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={1000}
      // onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index, item }) => (
        <View
          style={{
            // flex: 1,

            justifyContent: "center",
            backgroundColor: "white",
            marginHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <Image
            source={item}
            className="w-full h-2/3 "
            resizeMode="contain"
            resizeMethod="scale"
          />
          <View className=" flex-row items-center justify-evenly">
            <Button classes="items-center bg-secondary flex-row justify-evenly  rounded-md px-2 w-2/3">
              <Text className="text-white text-2xl py-2">Add to Cart</Text>
              <FontAwesome name="cart-plus" size={24} color="white" />
            </Button>
            <Text className="text-2xl">$500.00</Text>
          </View>
        </View>
      )}
    />
  </>
);
}

export default Slider