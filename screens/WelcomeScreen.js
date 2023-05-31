import { View, Text, Image } from 'react-native'
import React, {useEffect, useContext,} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { User } from '../components/UserContext';
const WelcomeScreen = () => {
  const navigation = useNavigation()
  const { user } = useContext(User)
  console.log(user);
  useEffect(() => { 
    
    if (user) {
      navigation.navigate('Drawer')
    }
  },[user])
  return (
    <SafeAreaView className="bg-white flex-1  justify-center">
      <View className=" justify-between flex-1 py-10">
        <Image
          source={require("../assets/welcome.png")}
          className="w-full h-2/3"
          resizeMode="contain"
          resizeMethod="scale"
        />
        <View>
          <Button
            classes="bg-primary py-2 mx-3 rounded flex-row justify-center items-center"
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text className="text-white text-center text-xl ">
              Create Account{" "}
            </Text>
            <AntDesign name="arrowright" size={24} color="white" />
          </Button>
          <Button
            classes="py-2 mx-3 mt-4 border border-secondary rounded flex-row justify-center items-center "
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-secondary ">Login</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen