import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar';

const SingleProduct = () => {
  return (
    <SafeAreaView className="flex-1">
      <TopBar/>
      <View>
        <Image
          source={require("../assets/2.jpg")}
          className="h-full w-full"
          resizeMode="contain"
          resizeMethod="scale"
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
}

export default SingleProduct