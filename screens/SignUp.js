import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { KeyboardAvoidingView } from 'react-native';
import Button from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View>
        <Text className="text-center text-3xl font-bold">Create Account</Text>
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="first name"
          placeholder="Enter First Name"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Last Name"
          placeholder="Enter Last Name"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
        />

        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Username"
          placeholder="Enter Username"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Email address"
          placeholder="Enter Email Address"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Password"
          placeholder="Enter Password"
          outlineColor="#2f8b33"
          secureTextEntry
          activeOutlineColor="#2f8b33"
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Password Confirmation"
          placeholder="Enter Password Confirmation"
          outlineColor="#2f8b33"
          secureTextEntry
          activeOutlineColor="#2f8b33"
        />
        <Button classes="bg-primary py-2 mx-3  mt-3 rounded flex-row justify-center items-center">
          <Text className="text-white text-center text-xl ">
            Create Account{" "}
          </Text>
        </Button>
        <View className="flex-row mt-2 justify-center">

        <Text>Already had an account? </Text>
        <Button classes="   " onPress={() => navigation.navigate("Login")}>
          <Text className="text-secondary ">Login</Text>
        </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUp