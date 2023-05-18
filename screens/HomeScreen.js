import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Slider from '../components/Slider';
import Table from '../components/Table';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between px-4 py-3">
        <MaterialCommunityIcons
          name="microsoft-xbox-controller-menu"
          size={28}
          color="black"
        />

        <SimpleLineIcons name="handbag" size={24} color="black" />
      </View>
      <View className="flex-row gap-2 justify-evenly ">
        <View className="w-[45%] h-40 rounded-xl bg-primary/80 items-center justify-center ">
          <Text className="text-white text-center text-4xl">Trending Products</Text>
        </View>
        <View className="w-[45%] h-40 rounded-xl bg-secondary/70 items-center justify-center ">
          <Text className="text-white text-center text-4xl">All Products</Text>
        </View>
      </View>
      <View className="my-3 h-72">
        <Slider/>
      </View>
      <View>
        <Table/>
      </View>
      <StatusBar style="light" backgroundColor="green" animated />
    </SafeAreaView>
  );
}

export default HomeScreen