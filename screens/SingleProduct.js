import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar';

const SingleProduct = ({ route }) => {
  const { item } = route.params

  return (
    <SafeAreaView className="flex-1">
      <TopBar title={ item.title} />
      <View>
        <Image
          source={{uri:item.image}}
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