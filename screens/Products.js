import { View, Text } from 'react-native'
import React from 'react'
import ListView from '../components/ListView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
const Products = () => {

  const navigation = useNavigation()
  
  const handleNavigate = (to) => {
    navigation.navigate(to)
  }
  return (
    <SafeAreaView className="flex-1">

      <ListView handleNavigate={ handleNavigate} /> 
    </SafeAreaView>
  )
}

export default Products