import { View, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import { User } from "./UserContext";
import { useContext, useEffect, useState } from "react";
import { IPV4 } from "@env";
const Header = ({ navigation }) => {
  const { user } = useContext(User)
  console.log(user);
  const [image, setImage] = useState('')
  useEffect(() => {
    if (Object.keys(user).length > 0 ) {
      
      const image = user.image_url.replace('localhost', IPV4)
      console.log(image);
      setImage(image)
    }
  }, [user])
console.log('out',  image);  
  return (
    <SafeAreaView className="flex-row justify-between px-4    items-center  h-20">
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons
          name="microsoft-xbox-controller-menu"
          size={28}
          color="black"
        />
      </TouchableOpacity>
      <View className="flex-row gap-3">
        <SimpleLineIcons name="handbag" size={24} color="black" />

        {image ? (
          <Avatar.Image
            size={24}
            source={{ uri: image }}
          />
        ) : (
          <Avatar.Image
            size={24}
            source={{ uri: "http://192.168.3.118:8080/uploads/default.png" }}
          />
        )}
       
      </View>
    </SafeAreaView>
  );
};

export default Header;
