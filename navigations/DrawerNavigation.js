import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsNavigations from "./TabsNavigations";
import { View } from "react-native";
import Header from "../components/Header";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tabs"
        component={TabsNavigations}
        options={{
          header: ({ navigation }) => {
            return <Header navigation={navigation} />;
          },
          headerStyle: {
            paddingBottom: 0,
          },
          headerStatusBarHeight: 20,
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
