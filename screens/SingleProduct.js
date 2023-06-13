import { View, Text, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '../components/TopBar';
import { TouchableRipple } from 'react-native-paper';
import Button from '../components/Button';
import { Entypo } from "@expo/vector-icons";
import { addCart, getCart } from '../redux/reducers/cartReducers';
import { User } from '../components/UserContext';
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from "@env";
import axios from 'axios';

const SingleProduct = ({ route, navigation }) => {
  const { item } = route.params
    const [count, setCount] = useState(0);
  const back = () => {
    navigation.goBack()
  }
  const { user } = useContext(User);
const cart = useSelector((state) => state.cartReducer);
const dispatch =  useDispatch()

    const handleSubmit = async (data, user) => {
      try {
        dispatch(addCart(data, user));
        dispatch(getCart());
      } catch (error) {}
  };
  
      const addCount = async (item) => {
        try {
          const response = await axios.post(
            `${BASE_URL}/cart/increment`,
            item
          );

          if (response.data) {
            dispatch(getCart());
          }
        } catch (error) {
          console.log(error);
        }
      };

      const minusCount = async (item) => {
        try {
          const response = await axios.post(
            `${BASE_URL}/cart/decrement`,
            item
          );

          if (response.data) {
            dispatch(getCart());
          }
        } catch (error) {
          console.log(error);
        }
      };
 useEffect(() => {
   if (Object.keys(cart).length > 0 && item) {
     const founditem = cart.item.find((p) => p.productId === item._id);
     if (founditem) {
       console.log(founditem);
       setCount(founditem.quantity);
     }
   }
 }, [cart, item]); 
console.log('item', item);
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
            <Button classes="bg-secondary rounded p-1" onPress={()=>minusCount(item)}>
              <Entypo name="minus" size={22} color="black" />
            </Button>
              <Text className="text-xl p-1">{ count}</Text>
            <Button classes="bg-secondary rounded p-1" onPress={()=>addCount({...item, productId:item._id})}>
              <Entypo name="plus" size={22} color="black" />
            </Button>
          </View>

        </View>
        <Button classes=" bg-secondary text-white items-center py-3 rounded " onPress={()=> handleSubmit(item, user)}>
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