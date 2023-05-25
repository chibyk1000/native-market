import { StatusBar } from "expo-status-bar";
import { StyleSheet, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import WelcomeScreen from "./screens/WelcomeScreen";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import TabsNavigations from "./navigations/TabsNavigations";
import Products from "./screens/Products";
import SingleProduct from "./screens/SingleProduct";
import UserContext from "./components/UserContext";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <UserContext>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              component={TabsNavigations}
              name="Tabs"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={Login}
              name="Login"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={WelcomeScreen}
              name="Welcome"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={SignUp}
              name="SignUp"
              options={{ headerShown: false }}
            />

            <Stack.Screen
              component={Products}
              name="Products"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={SingleProduct}
              name="SingleProduct"
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserContext>
  );
}

AppRegistry.registerComponent(appName, () => App);
