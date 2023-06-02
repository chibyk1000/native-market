import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar'
import React, {useContext, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Slider from '../components/Slider';
import Table from '../components/Table';
import { User } from "../components/UserContext";

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(User);

  useEffect(() => {
    if (Object.keys(user).length < 1) {
      navigation.navigate("Welcome");
    }
  }, [user])
  

  
  return (
    <SafeAreaView>
    
      <View className="flex-row gap-2 justify-evenly ">
        <View className="w-[45%] h-40 rounded-xl bg-primary/80 items-center justify-center ">
          <Text className="text-white text-center text-4xl">Trending Products</Text>
        </View>
    
        <TouchableOpacity  className="w-[45%]  h-40 rounded-xl bg-secondary/70 items-center justify-center " onPress={()=> navigation.navigate('Products')}>
          <Text className="text-white text-center text-4xl">All Products</Text>
        </TouchableOpacity>
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