import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import {
  TextInput,
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Divider,
} from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";
import MyButton from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeat_Pasword] = useState("");
  const [message, setMessage] = useState({
    color: "",
    title: "",
    text: "",
    icon: "",
  });
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const handleSignUp = async () => {
    try {
      const data = {
        firstname,
        lastname,
        username,
        email,
        password,
        repeat_password,
      };
      const response = await axios.post(
        "http://192.168.153.179:8080/user/create-account",
        data
      );
      if (response.status == 200) {
        navigation.navigate("Login");
      }
    } catch (error) {
      if (error) {
        setMessage({
          color: "red",
          icon: "warning",
          text: error.response.data.message,
          title: "Error!",
        });
        showDialog();
      }
      console.log(error.response.data);
    }
  };
  return (
    <SafeAreaView className="flex-1 justify-center pt-2">
      <PaperProvider>
        <View>
          <Portal>
            <Dialog
              visible={visible}
              onDismiss={hideDialog}
              className="rounded"
            >
              <Dialog.Title
                className={`text-red-500 font-bold text-3xl text-center my-0`}
              >
                {message.title}
                <MaterialIcons
                  name={message.icon}
                  size={24}
                  color={message.color}
                />{" "}
              </Dialog.Title>
              <Divider className="my-2" />
              <Dialog.Content>
                <Text variant="bodyMedium" className={`text-red-500 text-3xl`}>
                  {message.text}
                </Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  onPress={hideDialog}
                  className="bg-primary rounded"
                  textColor="white"
                >
                  Done
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>

        <View>
          <Text className="text-center text-3xl font-bold">Create Account</Text>
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
          <MyButton
            classes="bg-primary py-2 mx-3  mt-3 rounded flex-row justify-center items-center"
            onPress={handleSignUp}
          >
            <Text className="text-white text-center text-xl ">
              Create Account{" "}
            </Text>
          </MyButton>
          <View className="flex-row mt-2 justify-center">
            <Text>Already had an account? </Text>
            <MyButton
              classes="   "
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-secondary ">Login</Text>
            </MyButton>
          </View>
        </View>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default SignUp;
