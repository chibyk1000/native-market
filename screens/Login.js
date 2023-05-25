import { View, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import Button from '../components/Button';
import axios from 'axios';
import  {getUser, User} from '../components/UserContext';
const Login = ({ navigation }) => {
  const [data, setData] = useState({ email: "", password: "" })
  const {loggedin, setLoggedin, setUser} =  useContext(User)
  const handlePress = async() => {
    console.log('kk');
try {
  const response = await axios.post(
    "http://192.168.153.179:8080/user/login",
    data
  );
  if (response.status === 200) {
    const user = await getUser()
    setUser(user)
    setLoggedin(true)
    navigation.navigate("Tabs");
  }
} catch (error) {
  console.log(error.response.data);
}
    

  }
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View>
        <Text className="text-center text-3xl font-bold">Signin</Text>

        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Email Address"
          placeholder="Enter Email Address"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
        />

        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Password"
          placeholder="Enter Password"
          outlineColor="#2f8b33"
          secureTextEntry
          activeOutlineColor="#2f8b33"
          value={data.password}
          onChangeText={(text) => setData({ ...data, password: text })}
        />

        <Button
          classes="bg-primary py-2 mx-3  mt-3 rounded flex-row justify-center items-center"
          onPress={handlePress}
        >
          <Text className="text-white text-center text-xl ">Sign In</Text>
        </Button>
        <View className="flex-row mt-2 justify-center">
          <Text>Don't have an account? </Text>
          <Button classes="   " onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-secondary ">Create Account</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login