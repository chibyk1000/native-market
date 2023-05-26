import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar';
import { TouchableRipple } from 'react-native-paper';
import Button from '../components/Button';
import { Entypo } from "@expo/vector-icons";
const SingleProduct = ({ route, navigation }) => {
  const { item } = route.params
3
  const back = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView className="pt-0 flex-1 justify-between bg-white">
      <TopBar title={item.title} navigation={back} />
      <ScrollView className="" contentContainerStyle={{flex:1}}>
        
      <View className="h-2/6">
        <Image
          source={{ uri: item.image }}
          className="h-[90%] w-full mt-2 mx-auto"
          resizeMode="contain"
          resizeMethod="scale"
        />
      </View>
      <View className="h-2/6 px-4">
        <View className="flex-row w-11/12 gap-8 mb-5">
          <Text className="text-xl font-bold ">Price:</Text>
          <Text className="text-lg font-bold ">{item.price}</Text>
        </View>
        <View className="flex-row w-11/12 my-4 items-center gap-3">
          <Text className="text-xl font-bold ">Quantity:</Text>
          <View className="flex-row items-center">
            <Button classes="bg-secondary rounded p-1">
              <Entypo name="minus" size={22} color="black" />
            </Button>
            <Text className="text-xl p-1">0</Text>
            <Button classes="bg-secondary rounded p-1">
              <Entypo name="plus" size={22} color="black" />
            </Button>
          </View>

        </View>
        <Button classes=" bg-secondary text-white items-center py-3 rounded ">
          <Text className="text-white text-center text-xl">Add To Cart</Text>
        </Button>
        </View>
        <View className="h-2/6">
          <Text className="text-xl font-bold ">Description:</Text>
          <Text className="">{ item.description}</Text>
        </View>

</ScrollView>
    </SafeAreaView>
  );
}

export default SingleProduct