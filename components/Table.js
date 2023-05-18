import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Table = () => {
  return (
    <View className="w-11/12 mx-auto">
      <View className="bg-slate-700 flex-row justify-evenly py-2 pl-2">
        <Text className="text-white font-bold capitalize w-1/3">Item</Text>
        <Text className="text-white font-bold capitalize w-1/3">Quantity</Text>
        <Text className="text-white font-bold capitalize w-1/3">Price</Text>
      </View>
      <ScrollView className="h-40">
        <View className="bg-white flex-row justify-evenly pl-1 py-2 my-1 shadow">
          <Text className="text-left w-1/3">Item name</Text>
          <Text className="text-left w-1/3">5</Text>
          <Text className="text-left w-1/3">$4</Text>
        </View>
        <View className="bg-white flex-row justify-evenly pl-1 py-2 my-1 shadow">
          <Text className="text-left w-1/3">Item name</Text>
          <Text className="text-left w-1/3">5</Text>
          <Text className="text-left w-1/3">$4</Text>
        </View>
        <View className="bg-white flex-row justify-evenly pl-1 py-2 my-1 shadow">
          <Text className="text-left w-1/3">Item name</Text>
          <Text className="text-left w-1/3">5</Text>
          <Text className="text-left w-1/3">$4</Text>
        </View>
        <View className="bg-white flex-row justify-evenly pl-1 py-2 my-1 shadow">
          <Text className="text-left w-1/3">Item name</Text>
          <Text className="text-left w-1/3">5</Text>
          <Text className="text-left w-1/3">$4</Text>
        </View>
        <View className="bg-white flex-row justify-evenly pl-1 py-2 my-1 shadow">
          <Text className="text-left w-1/3">Item name</Text>
          <Text className="text-left w-1/3">5</Text>
          <Text className="text-left w-1/3">$4</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Table