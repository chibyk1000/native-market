import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import ListView from '../components/ListView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import { User } from '../components/UserContext';
const Products = () => {
const {products} =  useContext(User)
  const navigation = useNavigation()
  
  const handleNavigate = (to, item) => {
    navigation.navigate(to, {item})
  }
  return (
    <SafeAreaView className="flex-1">

      <ListView handleNavigate={handleNavigate} products={ products } /> 
    </SafeAreaView>
  )
}

export default Products