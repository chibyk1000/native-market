import { View, Text, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';
import Button from '../components/Button';
import { User } from '../components/UserContext';
import axios from 'axios';
import { RefreshControl, Platform } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BASE_URL } from "@env";
import * as ImagePicker from "expo-image-picker";
const Profile = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState('')
  const [repeat_password, setRepeat_Pasword] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  
  const { user } = useContext(User)
  useEffect(() => {
    setFirstname(user.firstname)
    setLastName(user.lastname)
    setEmail(user.email)
    // setImage(user.image_url)
  },[user])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const stopRefresh = () => {
    setRefreshing(false)
  }
  const handleUpdate = async() => {
    try {
  
      const resp = await axios.put(`${BASE_URL}/user/update`, {firstname, lastname, email}  )
      console.log(resp.data);
      if (resp.status === 200) {
        setRefreshing(true)
        setTimeout(()=> stopRefresh(), 3000)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    // <SafeAreaView className="flex-1 ">
    <KeyboardAwareScrollView
      centerContent
      contentContainerStyle={{
        justifyContent: "center",
        flex: 1,
        height: "60%",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Button classes="bg-secondary w-20 " onPress={pickImage}>
        <Text className="text-white text-center">Upload pics</Text>
      </Button>
      {image && (
        <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
      )}
      <View>
        <Text className="text-center text-3xl font-bold">Profile</Text>
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="first name"
          placeholder="Enter First Name"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Last Name"
          placeholder="Enter Last Name"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
          value={lastname}
          onChangeText={(text) => setLastName(text)}
        />

        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Username"
          placeholder="Enter Username"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Email address"
          placeholder="Enter Email Address"
          outlineColor="#2f8b33"
          activeOutlineColor="#2f8b33"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Password"
          placeholder="Enter Password"
          outlineColor="#2f8b33"
          secureTextEntry
          activeOutlineColor="#2f8b33"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          className="w-11/12 my-1 mx-auto h-12 placeholder:text-sm text-md"
          mode="outlined"
          label="Password Confirmation"
          placeholder="Enter Password Confirmation"
          outlineColor="#2f8b33"
          secureTextEntry
          activeOutlineColor="#2f8b33"
          value={repeat_password}
          onChangeText={(text) => setRepeat_Password(text)}
        />
        <Button
          classes="bg-primary py-2 mx-3  mt-3 rounded flex-row justify-center items-center"
          onPress={handleUpdate}
        >
          <Text className="text-white text-center text-xl ">
            Update Profile
          </Text>
        </Button>
      </View>
    </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
}

export default Profile